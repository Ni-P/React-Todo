var React = require('react');
const uuid = require('node-uuid');
var PropTypes = React.PropTypes;
const TodoList = require('TodoList');
const AddTodoForm = require('AddTodoForm');

const TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Fart really loud'
        },
        {
          id: uuid(),
          text: 'Do nothing'
        }
      ],
      showCompleted: false,
      searchText: ''
    };
  },
  handleAddTodo: function(newTodo) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: newTodo
        }
      ]
    });
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var { todos } = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodoForm addTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
