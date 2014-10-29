/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName : 'InputElement',

    propTypes : {
        value : React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        onChange : React.PropTypes.func.isRequired
    },

    getDefaultProps : function()
    {
        return {
            value : ''
        };
    },

    onChange : function(event)
    {
        this.props.onChange(event.currentTarget.value);
    },

    render : function()
    {
        return this.transferPropsTo(
            <input onChange={this.onChange} value={this.props.value} />
        );
    }
});
