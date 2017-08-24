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

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [
        {
          id: 23,
          text: 'test all files',
          completed: false
        }
      ];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });
    it('should not set invalid todos', () => {
      var badTodos = { a: 'b' };
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });
  describe('getTodos', () => {
    it('Should get empty array from localStorage', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('Should return array with todos if valid data in localStorage', () => {
      var todos = [
        {
          id: 23,
          text: 'test all files',
          completed: false
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
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
