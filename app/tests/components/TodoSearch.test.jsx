var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

const TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('Should exist', () => {
    expect(TodoSearch).toExist();
  });
  it('Should call onSearch with entered input text', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(
      <TodoSearch onSearch={spy} />
    );
    var searchText = 'dog';

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false, 'dog');
  });

  it('Should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(
      <TodoSearch onSearch={spy} />
    );
    // var searchText = '';
    var showCompleted = true;

    todoSearch.refs.showCompleted.checked = showCompleted;
    // todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
