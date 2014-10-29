/* global window */
'use strict';

var React  = require('react');
var routes = require('./routes');

window.React = React;

React.initializeTouchEvents(true);

React.renderComponent(routes, window.document.body);
