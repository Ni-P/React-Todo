var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
const { Provider } = require('react-redux');

// const TodoList = require('TodoList');
// const Todo = require('Todo');
import { configure } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, { Todo } from 'Todo';

describe('TodoList', () => {
  it('Should exist', () => {
    expect(TodoList).toExist();
  });
  it('Should render each Todo passed to it once.', () => {
    var todos = [
      {
        id: 1,
        text: 'Do something',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: 2,
        text: 'Do something else',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }
    ];
    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );

    var todoList = TestUtils.scryRenderedComponentsWithType(
      provider,
      ConnectedTodoList
    )[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(
      todoList,
      ConnectedTodo
    );
    expect(todosComponents.length).toBe(todos.length);
  });
  it('Should render empty message if no todos.', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
