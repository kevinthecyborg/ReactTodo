var React = require('react');
var Nav = require('Nav');

var TodoApp = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <h1>TodoApp.jsx Rendered</h1>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = TodoApp;
