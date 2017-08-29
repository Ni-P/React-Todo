var React = require('react');
var PropTypes = React.PropTypes;

var AddTodoForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var inputText = this.refs.text.value;
    if (inputText !== '') {
      this.props.addTodo(inputText);
      this.refs.text.value = '';
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="text" placeholder="Enter your todo." />
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodoForm;
