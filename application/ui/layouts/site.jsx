/** @jsx React.DOM */
'use strict';

var React     = require('react');
var Header    = require('./header/user-logged-out.jsx');
var FluxMixin = require('fluxxor').FluxMixin(React);

module.exports = React.createClass({

    displayName : 'SiteLayout',

    mixins : [FluxMixin],

    render : function() {
        return (
            <div className='l--app-wrapper'>
                <div className='l--user'>
                    <Header />
                </div>
                {this.props.activeRouteHandler()}
            </div>
        );
    }
});
