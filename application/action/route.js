'use strict';

var constants = require('../constants');

module.exports = {
    navigate : function(route, params, query)
    {
        this.dispatch(
            constants.NAVIGATE,
            {
                route  : route,
                params : params,
                query  : query
            }
        );
    },
    forward : function(route, params, query)
    {
        this.dispatch(
            constants.FORWARD,
            {
                route  : route,
                params : params,
                query  : query
            }
        ) ;
    }
};
