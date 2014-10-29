/** @jsx React.DOM */
'use strict';

var React           = require('react');
var classSet        = require('react/lib/cx');
var _               = require('underscore');
var Label           = require('../label');
var RadioInput      = require('./radio');
var InputValidation = require('../input-validation');

module.exports = React.createClass({

    displayName : 'RadioInputGroup',

    propTypes : {
        name    : React.PropTypes.string.isRequired,
        label   : React.PropTypes.string,
        inline  : React.PropTypes.bool,
        options : React.PropTypes.arrayOf(React.PropTypes.shape({
            text    : React.PropTypes.string,
            value   : React.PropTypes.string,
            checked : React.PropTypes.bool
        })),
        validationDisplay : React.PropTypes.string,
        validation        : React.PropTypes.object
    },

    getDefaultProps : function()
    {
        return {
            label             : null,
            options           : null,
            validationDisplay : null,
            validation        : {}
        };
    },

    getInitialState : function()
    {
        var checkedItem;

        if (_.isUndefined(this.props.options)) {
            checkedItem = null;
        } else {
            checkedItem = _.findWhere(this.props.options, {checked : true});

            if (checkedItem !== undefined) {
                checkedItem = checkedItem.value;
            }
        }

        return {
            checked : checkedItem
        };
    },

    onChange : function(value)
    {
        this.setState({checked : value});
    },

    renderLabel : function()
    {
        if (! this.props.label) {
            return null;
        }

        return (
            <Label
                className = 'radio-group__title-label'
                htmlFor   = ''
                text      = {this.props.label} />
        );
    },

    renderRadioInputs : function()
    {
        var changeHandler, checkedState, name, radioInputs;

        changeHandler = this.onChange;
        checkedState  = this.state.checked;
        name          = this.props.name;
        radioInputs   = [];

        if (! this.props.options) {
            return this.props.children;
        }

        this.props.options.map(function(input, index) {
            radioInputs.push(
                <RadioInput
                    id       = {name + '-' + index}
                    name     = {name}
                    checked  = {checkedState === input.value}
                    value    = {input.value}
                    label    = {input.text}
                    onChange = {changeHandler}
                    key      = {'radio-input-' + index} />
            );
        });

        return radioInputs;
    },

    render : function()
    {
        var groupClasses = classSet({
            'radio-group'         : true,
            'radio-group--inline' : this.props.inline
        });

        return (
            <InputValidation
                validation = {this.props.validation}
                display    = {this.props.validationDisplay} >
                <div className={groupClasses}>
                    {this.renderLabel()}
                    {this.renderRadioInputs()}
                </div>
            </InputValidation>
        );
    }

});
