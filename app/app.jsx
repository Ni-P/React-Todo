var ReactDOM = require('react-dom');
var React = require('react');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
const TodoApp = require('TodoApp');

// load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(<TodoApp />, document.getElementById('app'));
