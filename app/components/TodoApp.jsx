import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodoForm from 'AddTodoForm';
import TodoSearch from 'TodoSearch';

import * as actions from 'actions';
// const TodoAPI = require('TodoAPI');

export var TodoApp = React.createClass({
  onLogout(e) {
    var { dispatch } = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },
  render() {
    // var { todos, showCompleted, searchText } = this.state;
    // var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <div>
          <div className="page-actions">
            <a href="#" onClick={this.onLogout}>
              Logout
            </a>
          </div>
        </div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodoForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(TodoApp);
