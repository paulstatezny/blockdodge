/** @jsx React.DOM */
'use strict';

var React          = require('react');
var FluxChildMixin = require('fluxxor').FluxChildMixin(React);
var classSet       = require('react/lib/cx');

module.exports = React.createClass({
    displayName : 'StyleGuideNavItem',

    mixins : [FluxChildMixin],

    propTypes : {
        active      : React.PropTypes.bool,
        displayName : React.PropTypes.string
    },

    getDefaultProps : function()
    {
        return {
            active      : false,
            displayName : ''
        };
    },

    onClick : function()
    {
        if (this.props.displayName) {
            this.getFlux().actions.route.navigate(
                'style-guide-section',
                {section : this.props.displayName}
            );
        } else {
            this.getFlux().actions.route.navigate('style-guide');
        }
    },

    render : function()
    {
        var linkClasses;

        linkClasses = classSet({
            'sg-nav__menu-link'             : true,
            'sg-nav__menu-link--is-current' : this.props.active
        });

        return (
            <li className='sg-nav__menu-item'>
                <a className={linkClasses} onClick={this.onClick}>
                    {this.props.children || this.props.displayName}
                </a>
            </li>
        );
    }

});
