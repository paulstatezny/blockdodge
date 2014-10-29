/** @jsx React.DOM */
'use strict';

var React           = require('react');
var TextInput       = require('../../form/inputs/text');
var TextareaInput   = require('../../form/inputs/textarea');
var SelectInput     = require('../../form/inputs/select');
var RadioInput      = require('../../form/inputs/radio');
var RadioInputGroup = require('../../form/inputs/radio-group');
var CheckboxInput   = require('../../form/inputs/checkbox');
var CheckboxGroup   = require('../../form/inputs/checkbox-group');

module.exports = React.createClass({

    displayName : 'Form Elements',

    render : function()
    {
        var mockValidationObj1,
            mockValidationObj2,
            mockValidationObj3,
            mockSelectInputData,
            mockRadioGroupData,
            mockCheckboxGroupData,
            mockRadioGroupData2,
            mockCheckboxGroupData2;

        mockValidationObj1 = {
          status   : 'warning',
          messages : ['Warning message 1']
        };

        mockValidationObj2 = {
          status   : 'error',
          messages : ['Error message']
        };

        mockValidationObj3 = {
          status   : 'success',
          messages : ['Success message']
        };

        mockSelectInputData = [
            {
                text  : 'Option 1',
                value : 'option-1'
            },
            {
                text  : 'Option 2',
                value : 'option-2'
            },
            {
                text  : 'Option 3',
                value : 'option-3'
            },
            {
                text  : 'Option 4',
                value : 'option-4'
            }
        ];

        mockRadioGroupData = [
            {
                text    : 'Radio option 1',
                value   : 'radio-option-1',
                checked : true
            },
            {
                text    : 'Radio option 2',
                value   : 'radio-option-2',
                checked : false
            },
            {
                text    : 'Radio option 3',
                value   : 'radio-option-3',
                checked : false
            }
        ];

        mockCheckboxGroupData = [
            {
                text    : 'Checkbox option 1',
                value   : 'checkbox-option-1',
                checked : true
            },
            {
                text    : 'Checkbox option 2',
                value   : 'checkbox-option-2',
                checked : false
            },
            {
                text    : 'Checkbox option 3',
                value   : 'checkbox-option-3',
                checked : false
            }
        ];

        mockRadioGroupData2 = [
            {
                text    : 'Radio option 1-2',
                value   : 'radio-option-1-2',
                checked : true
            },
            {
                text    : 'Radio option 2-2',
                value   : 'radio-option-2-2',
                checked : false
            },
            {
                text    : 'Radio option 3-2',
                value   : 'radio-option-3-2',
                checked : false
            }
        ];

        mockCheckboxGroupData2 = [
            {
                text    : 'Checkbox option 1-2',
                value   : 'checkbox-option-1-2',
                checked : true
            },
            {
                text    : 'Checkbox option 2-2',
                value   : 'checkbox-option-2-2',
                checked : false
            },
            {
                text    : 'Checkbox option 3-2',
                value   : 'checkbox-option-3-2',
                checked : false
            }
        ];

        return (
            <div className='sg-page'>
                <h1 className='sg-h1'>{'Form Elements'}</h1>
                <h2 className='sg-h2'>{'Input types'}</h2>
                <div className='row'>
                    <div className='medium-6 columns'>
                        <TextInput
                            label       = 'Basic text input:'
                            id          = 'text-input'
                            type        = 'text'
                            placeholder = 'Text input' />
                        <TextInput
                            label       = 'Email text input:'
                            id          = 'email-text-input'
                            type        = 'email'
                            placeholder = 'Ex: anybody@anywhere.com' />
                        <TextInput
                            label       = 'Password text input:'
                            id          = 'pwd-text-input'
                            type        = 'password'
                            placeholder = 'Enter your password' />
                        <TextInput
                            label       = 'Search text input:'
                            id          = 'search-text-input'
                            type        = 'search'
                            placeholder = 'Search terms' />
                        <TextInput
                            label       = 'URL text input:'
                            id          = 'url-text-input'
                            type        = 'url'
                            placeholder = 'Ex: http://anywhere.org' />
                        <TextInput
                            label       = 'Phone text input:'
                            id          = 'phone-text-input'
                            type        = 'tel'
                            placeholder = 'Ex: (555) 555-5555' />
                        <TextInput
                            label       = 'Number text input:'
                            id          = 'number-text-input'
                            type        = 'number'
                            placeholder = 'Enter your lucky number' />
                        <TextareaInput
                            label       = 'Textarea:'
                            id          = 'textarea-input'
                            rows        = {10}
                            placeholder = 'Tell us a bit about yourself...' />
                    </div>
                    <div className='medium-6 columns'>
                        <TextInput
                            label       = 'Date text input:'
                            id          = 'date-text-input'
                            type        = 'date'
                            placeholder = 'MM/DD/YYYY' />
                        <TextInput
                            label       = 'Datetime text input:'
                            id          = 'datetime-text-input'
                            type        = 'datetime'
                            placeholder = 'MM/DD/YYYY' />
                        <TextInput
                            label       = 'Datetime-local text input:'
                            id          = 'datetime-local-text-input'
                            type        = 'datetime-local'
                            placeholder = 'MM/DD/YYYY EST' />
                        <TextInput
                            label       = 'Month text input:'
                            id          = 'month-text-input'
                            type        = 'month'
                            placeholder = 'Month you were born' />
                        <TextInput
                            label       = 'Week text input:'
                            id          = 'week-text-input'
                            type        = 'week'
                            placeholder = 'Week' />
                        <TextInput
                            label       = 'Day text input:'
                            id          = 'day-text-input'
                            type        = 'day'
                            placeholder = 'Tuesday' />
                        <SelectInput
                            label   = 'Select input:'
                            id      = 'select-input'
                            options = {mockSelectInputData} />
                        <div className='row'>
                            <div className='medium-6 columns'>
                                <RadioInput
                                    id      = 'radio-1-input'
                                    name    = 'radio-input'
                                    checked = {true}
                                    value   = 'option 1'
                                    label   = 'Single radio input' />
                                <RadioInputGroup
                                    label   = 'Radio Group'
                                    name    = 'radio-group-1'
                                    options = {mockRadioGroupData} />
                            </div>
                            <div className='medium-6 columns'>
                                <CheckboxInput
                                    id      = 'checkbox-single-1-input'
                                    checked = {true}
                                    value   = 'option 1'
                                    label   = 'Single checkbox-single input' />
                                <CheckboxGroup
                                    label   = 'Checkbox Group'
                                    name    = 'checkbox-group-1'
                                    options = {mockCheckboxGroupData} />
                            </div>
                        </div>
                        <RadioInputGroup
                            label   = 'Inline Radio Group'
                            name    = 'radio-group-3'
                            inline  = {true}
                            options = {mockRadioGroupData2} />
                        <CheckboxGroup
                            label   = 'Checkbox Group'
                            name    = 'checkbox-group-3'
                            inline  = {true}
                            options = {mockCheckboxGroupData2} />
                    </div>
                </div>

                <h2 className='sg-h2'>{'Validation'}</h2>
                <div className='row'>
                    <div className='medium-6 columns'>
                        <TextInput
                            label             = 'Validation warning:'
                            id                = 'warning-validation-input'
                            type              = 'email'
                            placeholder       = 'Email input'
                            validationDisplay = 'default'
                            value             = 'anybody#anywhere.com'
                            validation        = {mockValidationObj1} />
                        <TextInput
                            label             = 'Validation error:'
                            id                = 'error-validation-input'
                            type              = 'text'
                            placeholder       = 'Enter a number'
                            validationDisplay = 'default'
                            value             = 'horse'
                            validation        = {mockValidationObj2} />
                        <TextInput
                            label             = 'Validation success:'
                            id                = 'success-validation-input'
                            type              = 'text'
                            placeholder       = 'Email address'
                            validationDisplay = 'default'
                            value             = 'anybody@anywhere.com'
                            validation        = {mockValidationObj3} />
                    </div>
                    <div className='medium-6 columns'>
                        <TextInput
                            label             = 'Validation warning (positioned):'
                            id                = 'warning-validation-input'
                            type              = 'email'
                            placeholder       = 'Email input'
                            validationDisplay = 'positioned'
                            value             = 'anybody#anywhere.com'
                            validation        = {mockValidationObj1} />
                        <TextInput
                            label             = 'Validation error (positioned):'
                            id                = 'warning-validation-input'
                            type              = 'email'
                            placeholder       = 'Email input'
                            validationDisplay = 'positioned'
                            value             = 'anybody#anywhere.com'
                            validation        = {mockValidationObj2} />
                        <TextInput
                            label             = 'Validation success (positioned):'
                            id                = 'warning-validation-input'
                            type              = 'email'
                            placeholder       = 'Email input'
                            validationDisplay = 'positioned'
                            value             = 'anybody#anywhere.com'
                            validation        = {mockValidationObj3} />
                    </div>
                </div>

            </div>
        );
    }

});
