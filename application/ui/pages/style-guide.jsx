/** @jsx React.DOM */
/* global document */
'use strict';

var React     = require('react');
var FluxMixin = require('fluxxor').FluxMixin(React);
var SGHeader  = require('../components/style-guide/sg-header');

var TypographySection   = require('../components/style-guide/sections/sg-typography');
var ButtonSection       = require('../components/style-guide/sections/sg-buttons');
var IconSection         = require('../components/style-guide/sections/sg-icons');
var FormElementsSection = require('../components/style-guide/sections/sg-form-elements');

module.exports = React.createClass({

    displayName : 'StyleGuide',

    mixins : [FluxMixin],

    componentWillMount: function()
    {
        var doc               = document,
            styleGuideCSSLink = doc.createElement('link');

        styleGuideCSSLink.href  = '/css/style-guide.css';
        styleGuideCSSLink.type  = 'text/css';
        styleGuideCSSLink.rel   = 'stylesheet';
        styleGuideCSSLink.media = 'screen';

        doc.getElementsByTagName('head')[0].appendChild(styleGuideCSSLink);
    },

    getComponentConstructors : function()
    {
        return [
            TypographySection,
            ButtonSection,
            IconSection,
            FormElementsSection
        ];
    },

    renderSections : function()
    {
        var section = this.props.params.section;

        return this.getComponentConstructors().map(function(Page) {
            if (section === 'all' || section === Page.displayName) {
                return <Page key={Page.displayName} />;
            }
        });
    },

    render : function()
    {
        return (
            <div className='sg'>
                <SGHeader sections={this.getComponentConstructors()} activeSection={this.props.params.section}/>
                <div className='sg-content'>
                    <div className='sg-content__header'>
                        <h1 className='sg-content__title'>{'Style Guide'}</h1>
                    </div>
                    {this.renderSections()}
                </div>
            </div>
        );
    }

});
