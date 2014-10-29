'use strict';

var authActions  = require('./action/auth');
var routeActions = require('./action/route');

module.exports = {
    auth  : authActions,
    route : routeActions
};
