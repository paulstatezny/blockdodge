/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName : 'CaretIcon',

    render : function()
    {
        return (
            <svg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0px' y='0px' viewBox='0 0 25 25' enable-background='new 0 0 25 25'>
                <g>
                    <path d="M18.6,13.5L8.4,23.8c-0.3,0.3-0.6,0.4-1,0.4c-0.8,0-1.5-0.7-1.5-1.5V2.3c0-0.8,0.7-1.5,1.5-1.5c0.4,0,0.8,0.2,1,0.4 l10.2,10.2c0.3,0.3,0.4,0.6,0.4,1S18.9,13.3,18.6,13.5z"/>
                </g>
            </svg>
        );
    }
});
