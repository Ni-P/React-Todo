var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

const AddTodoForm = require('AddTodoForm');

describe('AddTodoForm', () => {
  it('Should exist', () => {
    expect(AddTodoForm).toExist();
  });
  it('Should call addNewTodo when submitted with text', () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(
      <AddTodoForm addTodo={spy} />
    );
    var $el = $(ReactDOM.findDOMNode(addTodoForm));
    addTodoForm.refs.text.value = 'test text';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('test text');
  });
  it('Should not call addNewTodo when submitted empty.', () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(
      <AddTodoForm addTodo={spy} />
    );
    var $el = $(ReactDOM.findDOMNode(addTodoForm));
    addTodoForm.refs.text.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
