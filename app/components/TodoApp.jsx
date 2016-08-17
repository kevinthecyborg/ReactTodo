var React = require('react');
var Nav = require('Nav');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <TodoList/>
            {props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
