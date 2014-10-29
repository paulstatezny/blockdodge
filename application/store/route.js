'use strict';

var constants = require('../constants');
var Fluxxor   = require('fluxxor');
var Router    = require('react-router');

var RouteStore = Fluxxor.createStore({
    initialize: function()
    {
        this.bindActions(
            constants.NAVIGATE, 'navigate',
            constants.FORWARD, 'forward',
            constants.LOGOUT, 'onLogout',
            constants.LOGIN_SUCCESSFUL, 'onLoginSuccessful'
        );
    },

    navigate: function(payload)
    {
        Router.transitionTo(payload.route, payload.params || {}, payload.query || {});
    },

    forward: function(payload)
    {
        Router.replaceWith(payload.route, payload.params || {}, payload.query || {});
    },

    onLogout : function()
    {
        Router.transitionTo('home');
    },

    onLoginSuccessful : function()
    {
        Router.transitionTo('home');
    }
});

module.exports = RouteStore;
