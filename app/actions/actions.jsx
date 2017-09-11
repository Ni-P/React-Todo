export var setSearchText = function(searchText) {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var addTodo = function(text) {
  return {
    type: 'ADD_TODO',
    text
  };
};

export var toggleShowCompleted = function() {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var toggleTodo = function(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
