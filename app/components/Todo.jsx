var React = require('react');
const moment = require('moment');
var PropTypes = React.PropTypes;

var Todo = React.createClass({
  render: function() {
    var { id, text, completed, createdAt, completedAt } = this.props;
    var renderDate = () => {
      var message = 'Created at ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed at ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('Do MMM YYYY @ h:mm a');
    };
    return (
      <div
        onClick={() => {
          this.props.onToggle(id);
        }}
      >
        <input type="checkbox" checked={completed} />
        <p>
          {text}
        </p>
        <p>
          {renderDate()}
        </p>
      </div>
    );
  }
});

module.exports = Todo;
