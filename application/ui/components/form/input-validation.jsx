/** @jsx React.DOM */
'use strict';

var React    = require('react');
var classSet = require('react/lib/cx');

module.exports = React.createClass({

    displayName : 'InputValidation',

    propTypes : {
        display    : React.PropTypes.oneOf(['default', 'positioned']),
        validation : React.PropTypes.shape({
            status   : React.PropTypes.oneOf(['error', 'warning', 'success']),
            messages : React.PropTypes.array
        })
    },

    getDefaultProps : function()
    {
        return {
            display    : 'default',
            validation : {
                status   : null,
                messages : null
            }
        };
    },

    renderValidation : function()
    {
        if (! this.props.validation.messages) {
            return null;
        }

        var validationClasses, validationMessages;

        validationMessages = [];
        validationClasses  = classSet({
            'validation__msg'          : true,
            'input-wrap__msg'          : true,
            'validation__msg--error'   : this.props.validation.status === 'error',
            'validation__msg--warning' : this.props.validation.status === 'warning',
            'validation__msg--success' : this.props.validation.status === 'success'
        });

        this.props.validation.messages.map(function(message, index) {
            validationMessages.push(
                <span
                    className = {validationClasses}
                    key       = {'validation-msg-' + index} >
                    {message}
                </span>
            );
        });

        return (
            <div className='validation__msgs'>
                {validationMessages}
            </div>
        );
    },

    render : function()
    {
        var inputValidationClasses = classSet({
            'validation'             : true,
            'validation--visible'    : this.props.validation,
            'validation--error'      : this.props.validation && this.props.validation.status === 'error',
            'validation--warning'    : this.props.validation && this.props.validation.status === 'warning',
            'validation--success'    : this.props.validation && this.props.validation.status === 'success',
            'validation--positioned' : this.props.validation && this.props.display === 'positioned'
        });

        return (
            <div className={inputValidationClasses} id={null}>
                {this.props.children}
                {this.renderValidation()}
            </div>
        );
    }

});
