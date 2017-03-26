var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <p>Template 3 Project</p>,
    document.getElementById('app')
)

// require('./redux-fetchLocation.jsx');

require('./redux-todo.jsx');