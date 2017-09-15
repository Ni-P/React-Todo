const expect = require('expect');
const actions = require('actions');

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
      text: 'Thing to do'
    };
    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
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
  it('Should generate action to toggle complete status of a todo', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '123'
    };
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
