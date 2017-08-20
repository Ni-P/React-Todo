var React = require('react');
var PropTypes = React.PropTypes;
const TodoList = require('TodoList');
const AddTodoForm = require('AddTodoForm');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Fart really loud'
        },
        {
          id: 4,
          text: 'Do nothing'
        }
      ]
    };
  },
  handleAddTodo: function(newTodo) {
    var newId = this.state.todos.length + 1;
    var newTodos = this.state.todos;
    newTodos.push({ id: newId, text: newTodo });
    this.setState({
      todos: newTodos
    });
    alert(newTodo + ' added');
  },
  render: function() {
    var { todos } = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodoForm addTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
