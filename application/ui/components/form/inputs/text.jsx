/** @jsx React.DOM */
'use strict';

var React           = require('react');
var Label           = require('../label');
var InputValidation = require('../input-validation');
var FormInputsMixin = require('./form-inputs-mixin');

module.exports = React.createClass({

    displayName : 'TextInputElement',

    mixins : [FormInputsMixin],

    propTypes : {
        id                    : React.PropTypes.string.isRequired,
        label                 : React.PropTypes.string,
        onChange              : React.PropTypes.func,
        placeholder           : React.PropTypes.string,
        initialValue          : React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        type : React.PropTypes.oneOf([
            'date',
            'datetime',
            'datetime-local',
            'day',
            'email',
            'month',
            'number',
            'password',
            'search',
            'tel',
            'text',
            'url',
            'week'
        ]),
        validationDisplay : React.PropTypes.string,
        validation        : React.PropTypes.object
    },

    getDefaultProps : function()
    {
        return {
            label             : null,
            onChange          : null,
            placeholder       : '',
            initialValue      : '',
            type              : 'text',
            validationDisplay : null,
            validation        : {}
        };
    },

    renderLabel : function()
    {
        if (! this.props.label) {
            return null;
        }

        return (
            <Label
                htmlFor   = {this.props.id}
                className = 'input-wrap__label'
                text      = {this.props.label} />
        );
    },

    render : function()
    {
        var inputElementClasses = [
            'input',
            'input--' + this.props.type
        ].join(' ');

        return this.transferPropsTo(
            <InputValidation
                validation = {this.props.validation}
                display    = {this.props.validationDisplay} >
                {this.renderLabel()}
                <div className='input-wrap'>
                    <input
                        className   = {inputElementClasses}
                        id          = {this.props.id}
                        name        = {this.props.id}
                        type        = {this.props.type}
                        value       = {this.state.inputValue}
                        placeholder = {this.props.placeholder}
                        onChange    = {this.onChange} />
                </div>
            </InputValidation>
        );
    }
});
