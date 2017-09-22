var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import { Todo } from 'Todo';
import * as actions from 'actions';

describe('Todo', () => {
  it('Should exist', () => {
    expect(Todo).toExist();
  });
  it('Should dispatch UPDATE_TODO action onClick', () => {
    var todoData = {
      id: 199,
      text: 'todo test text',
      completed: false
    };
    var action = actions.startToggleTodo(todoData.id, !todoData.completed);
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(
      <Todo {...todoData} dispatch={spy} />
    );
    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
