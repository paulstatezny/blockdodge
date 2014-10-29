/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName : 'HomeModule',

    render : function() {
        var style1,
            style2;

        style1 = {
            'text-align'  : 'center',
            'margin-top'  : '200px',
            'font-size'   : '80px',
            'font-weight' : 'bold'
        };

        style2 = {
            'text-align' : 'center',
            'font-size'  : '20px'
        };

        return (
            <div>
                <h1 style={style1}>{'Frontend Template'}</h1>
                <h2 style={style2}>{'...sorry the name isn\'t better.'}</h2>
            </div>
        );

    }

});
