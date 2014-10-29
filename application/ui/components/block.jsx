/** @jsx React.DOM */
'use strict';

var React      = require('react');
var BLOCK_SIZE = 60;

module.exports = React.createClass({

    displayName : 'Block',

    propTypes : {
        xPosition : React.PropTypes.number,
        yPosition : React.PropTypes.number
    },

    render : function()
    {
        var style = {
            left : this.props.xPosition,
            top  : this.props.yPosition - BLOCK_SIZE
        };

        return <div className='block' style={style} />;
    }

});
