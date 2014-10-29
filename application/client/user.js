'use strict';

var config      = require('../config');
var HttpGateway = require('synapse-common/http/auth-gateway');
var store       = require('store');

var UserClient = HttpGateway.extend({

    config : config.api,

    getCurrentUser : function()
    {
        return this.apiRequest('GET', '/user');
    },

    createUser : function(userData)
    {
        return this.apiRequest('POST', '/users', userData);
    },

    setToken : function(tokenData)
    {
        this.token = tokenData;
    },

    _getRequestOptions : function(method, path)
    {
        var options, token;

        options = HttpGateway.prototype._getRequestOptions.call(this, method, path);

        token = this.token || store.get('token');

        if (token) {
            options.headers.Authorization = 'Bearer' + ' ' + token.access_token;
        }

        return options;
    }
});

module.exports = new UserClient();
