/** @jsx React.DOM */
'use strict';

var React    = require('react');

module.exports = React.createClass({

    displayName : 'FormLabel',

    propTypes : {
        htmlFor : React.PropTypes.string.isRequired,
        text    : React.PropTypes.string
    },

    getDefaultProps : function()
    {
        return {
            text : null
      };
    },

    render : function()
    {
        return this.transferPropsTo(
            <label
                className = 'label'
                htmlFor   = {this.props.htmlFor} >
                {this.props.text}
                {this.props.children}
            </label>
        );
    }

});
