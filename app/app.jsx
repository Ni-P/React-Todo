var ReactDOM = require('react-dom');
var React = require('react');
var { hashHistory } = require('react-router');
import TodoApp from 'TodoApp';

var { Provider } = require('react-redux');
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});
var actions = require('actions');
var store = require('configureStore').configure();

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

// load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

console.log(process.env.NODE_ENV);

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);
