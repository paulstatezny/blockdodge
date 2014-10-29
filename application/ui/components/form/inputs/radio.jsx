/** @jsx React.DOM */
'use strict';

var React = require('react');
var Label = require('../label');

module.exports = React.createClass({

    displayName : 'RadioInputElement',

    propTypes : {
        id      : React.PropTypes.string.isRequired,
        name    : React.PropTypes.string.isRequired,
        checked : React.PropTypes.bool.isRequired,
        value   : React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]).isRequired,
        label    : React.PropTypes.string,
        onChange : React.PropTypes.func
    },

    getDefaultProps : function()
    {
        return {
            label    : null,
            onChange : null
        };
    },

    onChange : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onChange) {
            this.props.onChange(currentValue);
        }
    },

    renderText : function()
    {
        if (! this.props.label) {
            return null;
        }

        return (<span className='radio-text'>{this.props.label}</span>);
    },

    render : function()
    {
        return (
            <div className='input-wrap input-wrap--radio'>
                <Label
                    className = 'input-wrap__lable'
                    htmlFor   = {this.props.id} >
                    <input
                        className = 'radio'
                        id        = {this.props.id}
                        value     = {this.props.value}
                        name      = {this.props.name}
                        type      = 'radio'
                        checked   = {this.props.checked}
                        onChange  = {this.onChange} />
                    {this.renderText()}
                </Label>
            </div>
        );
    }

});
