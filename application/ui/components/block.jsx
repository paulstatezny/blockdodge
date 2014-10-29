/** @jsx React.DOM */
'use strict';

var React      = require('react');
var BLOCK_SIZE  = 60;
var WINDOW_SIZE = 600;

module.exports = React.createClass({

    displayName : 'Block',

    propTypes : {
        xPosition : React.PropTypes.number,
        yPosition : React.PropTypes.number
    },

    render : function()
    {
        if (this.props.yPosition > (WINDOW_SIZE + BLOCK_SIZE) || this.props.yPosition < 0) {
            return null;
        }

        var style = {
            left : this.props.xPosition,
            top  : this.props.yPosition - BLOCK_SIZE
        };

        return <div className='block' style={style} />;
    }

});
