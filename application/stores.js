'use strict';

var RouteStore = require('./store/route');
var BlockStore = require('./store/block');

module.exports = {
    RouteStore : new RouteStore(),
    BlockStore : new BlockStore()
};
