/** @jsx React.DOM */
/* globals __ENVIRONMENT__ */
'use strict';

var flux   = require('./flux');
var Route  = require('react-router').Route;
var Routes = require('react-router').Routes;

var SiteLayout       = require('./ui/layouts/site');
var HomePage         = require('./ui/pages/home');
var StyleGuidePage   = require('./ui/pages/style-guide');
var NotFoundPage     = require('./ui/pages/404');

var props = function(name, path, handler, props)
{
    props         = props || {};
    props.flux    = flux;
    props.handler = handler;
    props.path    = path;
    props.name    = name;

    return props;
};

var getEnvironmentDependentRoutes = function()
{
    var routes = [];

    if (__ENVIRONMENT__ !== 'production') {
        routes = routes.concat([
            Route(
                props('style-guide', '/style-guide', StyleGuidePage, {key : 'style-guide'})
            ),
            Route(
                props('style-guide-section', '/style-guide/:section', StyleGuidePage, {key : 'style-guide-section'})
            )
        ]);
    }

    return routes;
};

module.exports = Routes(
    {location : 'history'},
    Route(
        {handler : SiteLayout, location : 'history', flux : flux},
        Route(props('home', '/', HomePage)),
        getEnvironmentDependentRoutes(),
        Route(props('404', '*', NotFoundPage))
    )
);
