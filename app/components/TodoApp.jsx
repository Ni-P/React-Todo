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
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: false
        },
        {
          id: uuid(),
          text: 'Fart really loud',
          completed: false
        },
        {
          id: uuid(),
          text: 'Do nothing',
          completed: false
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
          text: newTodo,
          completed: false
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
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  render: function() {
    var { todos } = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <AddTodoForm addTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
