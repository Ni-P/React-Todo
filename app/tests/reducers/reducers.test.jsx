const expect = require('expect');
const reducers = require('reducers');
const df = require('deep-freeze-strict');
const uuid = require('node-uuid');
const moment = require('moment');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'test'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });
  describe('showCompletedReducer', () => {
    it('should flip the status of showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });
  describe('todosReducer', () => {
    it('should add a new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Test a new todo'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
    it('should toggle the completed status of a todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: uuid()
      };
      var todos = [
        {
          id: action.id,
          text: 'test todo',
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toEqual(moment().unix());
    });
  });
  it('should add existing todos', () => {
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
    var res = reducers.todosReducer(df([]), df(action));

    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(todos[0]);
  });
});
