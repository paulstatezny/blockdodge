/* global __BACKEND__ */
'use strict';

var backend;

backend = __BACKEND__ || '%QA_API_HOST%';

module.exports = {
    api : {
        hostname  : backend,
        port      : 80,
        client_id : '123'
    }
};
