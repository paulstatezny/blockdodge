/** @jsx React.DOM */
'use strict';

var React           = require('react');
var Label           = require('../label');
var InputValidation = require('../input-validation');
var FormInputsMixin = require('./form-inputs-mixin');

module.exports = React.createClass({

    displayName : 'TextareaInputElement',

    mixins : [FormInputsMixin],

    propTypes : {
        id                    : React.PropTypes.string.isRequired,
        label                 : React.PropTypes.string,
        onChange              : React.PropTypes.func,
        rows                  : React.PropTypes.number,
        placeholder           : React.PropTypes.string,
        initialValue          : React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        validationDisplay : React.PropTypes.string,
        validation        : React.PropTypes.object
    },

    getDefaultProps : function()
    {
        return {
            label             : null,
            onChange          : null,
            rows              : null,
            placeholder       : '',
            initialValue      : '',
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
        return (
            <InputValidation
                validation = {this.props.validation}
                display    = {this.props.validationDisplay} >
                {this.renderLabel()}
                <div className='input-wrap input-wrap--textarea'>
                    <textarea
                        className='textarea'
                        id          = {this.props.id}
                        name        = {this.props.id}
                        value       = {this.state.inputValue}
                        rows        = {this.props.rows}
                        placeholder = {this.props.placeholder}
                        onChange    = {this.onChange} >
                        {this.props.children}
                    </textarea>
                </div>
            </InputValidation>
        );
    }
});
