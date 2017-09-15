var React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

import TodoList from 'TodoList';
import AddTodoForm from 'AddTodoForm';
import TodoSearch from 'TodoSearch';
// const TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  render: function() {
    // var { todos, showCompleted, searchText } = this.state;
    // var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
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

module.exports = TodoApp;
