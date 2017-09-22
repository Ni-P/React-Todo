var $ = require('jQuery');

module.exports = {
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
