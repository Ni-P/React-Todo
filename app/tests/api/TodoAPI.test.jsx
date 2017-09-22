var TodoAPI = require('TodoAPI');
var expect = require('expect');
var $ = require('jQuery');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('Should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'text1text',
        completed: true
      },
      {
        id: 2,
        text: 'Todo',
        completed: false
      },
      {
        id: 3,
        text: 'toDo3',
        completed: true
      }
    ];
    it('Should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('Should return nonCompleted todos when showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
    it('Should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0]).toEqual(todos[1]);
    });
    it('Should return todos that contain searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'todo');
      expect(filteredTodos.length).toBe(2);
    });
    it('Should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(todos.length);
    });
  });
});
