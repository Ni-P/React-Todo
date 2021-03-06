var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var { Provider } = require('react-redux');
const moment = require('moment');

var configureStore = require('configureStore');
import { TodoApp } from 'TodoApp';
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });

  it('Should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(
      provider,
      TodoApp
    )[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toBe(1);
  });
});
