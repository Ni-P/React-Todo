var $ = require('jQuery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      console.error('failed to load todos from localStorage');
    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // console.log('filteredTodos: ', filteredTodos);

    // filter by showCompleted
    filteredTodos = filteredTodos.filter(todo => {
      return !todo.completed || showCompleted;
    });

    // filter by searchText
    if (searchText.length !== 0) {
      filteredTodos = filteredTodos.filter(todo => {
        return todo.text.toLowerCase().indexOf(searchText) == -1 ? false : true;
      });
    }

    // sort todos with nonCompleted first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
