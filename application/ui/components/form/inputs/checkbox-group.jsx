/** @jsx React.DOM */
'use strict';

var React           = require('react');
var classSet        = require('react/lib/cx');
var Label           = require('../label');
var InputValidation = require('../input-validation');
var CheckboxInput   = require('./checkbox');

module.exports = React.createClass({

    displayName : 'CheckboxInputGroup',

    defaultProps : {
        name    : React.PropTypes.string.isRequired,
        label   : React.PropTypes.string,
        inline  : React.PropTypes.bool,
        options : React.PropTypes.shape({
            text    : React.PropTypes.string,
            checked : React.PropTypes.bool,
            value   : React.PropTypes.oneOfType([
                React.PropTypes.string,
                React.PropTypes.number
            ])
        }),
        validation        : React.PropTypes.object,
        validationDisplay : React.PropTypes.string
    },

    getDefaultProps : function()
    {
        return {
            label   : null,
            inline  : false,
            options : null
        };
    },

    renderLabel : function()
    {
        if (! this.props.groupLabel) {
            return null;
        }

        return (
            <Label
                className = 'checkbox-group__title-label'
                htmlFor   = ''
                text      = {this.props.groupLabel} />
        );
    },

    renderInputs : function()
    {
        var checkboxInputs, name;

        checkboxInputs = [];
        name           = this.props.name;

        if (! this.props.options) {
            return this.props.children;
        }

        this.props.options.map(function(input, index) {
            checkboxInputs.push(
                <CheckboxInput
                    id       = {name + '-' + index}
                    checked  = {input.checked}
                    value    = {input.value}
                    label    = {input.text}
                    key      = {'radio-input-' + index} />
            );
        });

        return checkboxInputs;
    },

    render : function()
    {
        var groupClasses = classSet({
            'checkbox-group'         : true,
            'checkbox-group--inline' : this.props.inline
        });

        return (
            <InputValidation
                validation = {this.props.validation}
                display    = {this.props.display} >
                <div className={groupClasses}>
                    {this.renderLabel()}
                    {this.renderInputs()}
                </div>
            </InputValidation>
        );
    }

});
