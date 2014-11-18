'use strict';

var RouteStore = require('./store/route');
var GameStore = require('./store/game');

module.exports = {
    RouteStore : new RouteStore(),
    GameStore  : new GameStore()
};
