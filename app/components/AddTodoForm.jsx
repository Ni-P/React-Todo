var React = require('react');
var { connect } = require('react-redux');
const actions = require('actions');

export var AddTodoForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var { dispatch } = this.props;
    var inputText = this.refs.text.value;
    if (inputText !== '') {
      dispatch(actions.startAddTodo(inputText));
      this.refs.text.value = '';
    } else {
      this.refs.text.focus();
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

export default connect()(AddTodoForm);
