/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName : 'LoggedOutHeaderSection',

    render : function() {
        return (
            <p>
                {'Please '}<a route="login">{'log in'}</a>{' or '}<a route="register">{'register'}</a>.
            </p>
        );
    }
});
