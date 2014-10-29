'use strict';

var TokenStore = require('./store/token');
var UserStore  = require('./store/user');
var RouteStore = require('./store/route');

module.exports = {
    TokenStore : new TokenStore(),
    UserStore  : new UserStore(),
    RouteStore : new RouteStore()
};
