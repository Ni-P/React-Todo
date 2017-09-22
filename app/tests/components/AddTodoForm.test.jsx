var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

const { AddTodoForm } = require('AddTodoForm');
import * as actions from 'actions';

describe('AddTodoForm', () => {
  it('Should exist', () => {
    expect(AddTodoForm).toExist();
  });
  it('Should dispatch ADD_TODO when submitted with text', () => {
    var todoText = 'test text';
    var action = actions.startAddTodo(todoText);

    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(
      <AddTodoForm dispatch={spy} />
    );
    var $el = $(ReactDOM.findDOMNode(addTodoForm));
    addTodoForm.refs.text.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
  it('Should not dispatch ADD_TODO when submitted empty.', () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(
      <AddTodoForm dispatch={spy} />
    );
    var $el = $(ReactDOM.findDOMNode(addTodoForm));
    addTodoForm.refs.text.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
