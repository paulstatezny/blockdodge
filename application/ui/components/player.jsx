/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName : 'Player',

    propTypes : {
        position : React.PropTypes.number
    },

    render : function()
    {
        var style = {
            left : this.props.position + 'px'
        };

        return <div className='player' style={style} />;
    }

});
