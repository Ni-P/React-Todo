var ReactDOM = require('react-dom');
var React = require('react');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
const TodoApp = require('TodoApp');
var { Provider } = require('react-redux');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// store.subscribe(() => {
//   var state = store.getState();
//   // console.log('new state', store.getState());
//   TodoAPI.setTodos(state.todos);
// });
//
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

// store.dispatch(actions.addTodo('new todo'));
// store.dispatch(actions.setSearchText('new'));
// store.dispatch(actions.toggleShowCompleted());

store.dispatch(actions.startAddTodos());

// load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
