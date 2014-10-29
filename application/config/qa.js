/* global __BACKEND__ */
'use strict';

var backend;

backend = __BACKEND__ || 'api-blockdodge.vm';

module.exports = {
    api : {
        hostname  : backend,
        port      : 80,
        client_id : '123'
    }
};
