import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const expect = require('expect');
import firebase, { firebaseRef } from 'app/firebase/';

const actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('Should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('Should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '123',
        text: 'Thing to do',
        completed: false,
        createdAt: 3264123
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });
  it('should create todo and dispatch ADD_TODO', done => {
    const store = createMockStore({});
    const todoText = 'muh todo item';

    store
      .dispatch(actions.startAddTodo(todoText))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      })
      .catch(done);
  });
  it('should generate ADD_TODOS action', () => {
    var todos = [
      {
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 300000
      }
    ];
    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('Should generate action to toggle the completed field', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });
  it('Should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: { completed: false }
    };
    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });
  describe('Test with firebasetodos', () => {
    var testTodoRef;

    beforeEach(done => {
      var todosRef = firebaseRef.child('todos');

      todosRef
        .remove()
        .then(() => {
          testTodoRef = firebaseRef.child('todos').push();
          return testTodoRef.set({
            text: 'A test todo',
            completed: false,
            createdAt: 12345
          });
        })
        .then(() => done())
        .catch(done);
    });

    afterEach(done => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', done => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });
    it('should populate todos dispatch ADD_TODOS', done => {
      const store = createMockStore({});
      const action = actions.startAddTodos();

      console.log(action);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toEqual('ADD_TODOS');
        expect(mockActions[0].todos[0].length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('A test todo');

        done();
      }, done);
    });
  });
});
