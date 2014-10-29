/** @jsx React.DOM */
'use strict';

var React           = require('react');
var Label           = require('../label');
var Icon            = require('../../icon/icon');
var InputValidation = require('../input-validation');

module.exports = React.createClass({

    displayName : 'SelectInputElement',

    propTypes : {
        id                : React.PropTypes.string.isRequired,
        label             : React.PropTypes.string,
        validationDisplay : React.PropTypes.string,
        validation        : React.PropTypes.shape({
            text  : React.PropTypes.string,
            value : React.PropTypes.oneOfType([
                React.PropTypes.string,
                React.PropTypes.number
            ])
        })
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

    renderSelectOptions : function()
    {
        var selectOptions = [];

        if (! this.props.options) {
            return this.props.children;
        }

        this.props.options.map(function(option, index) {
            selectOptions.push(
                <option
                    value = {option.value}
                    key   = {'select-option-' + index} >
                    {option.text}
                </option>
            );
        });

        return selectOptions;
    },

    render : function()
    {
        return this.transferPropsTo(
            <InputValidation
                validation = {this.props.validation}
                display    = {this.props.validationDisplay} >
                {this.renderLabel()}
                <div className='input-wrap input-wrap--select'>
                    <select className='input input--select' id={this.props.id}>
                        {this.renderSelectOptions()}
                    </select>
                    <span className='input--select__arrow'>
                        <Icon
                            className = 'input--select__arrow-icon'
                            icon      = 'caret'
                            rotate    = {90} />
                    </span>
                </div>
            </InputValidation>
        );
    }

});
