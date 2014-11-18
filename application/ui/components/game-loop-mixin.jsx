/** @jsx React.DOM */
'use strict';

var _         = require('underscore');
var constants = require('../../constants');

module.exports = {
    componentDidUpdate : function(prevProps, prevState)
    {
        if (this.state.playing === true && prevState.playerYPosition !== this.state.playerYPosition) {
            _.delay(this.incrementFrame, constants.FRAME_LENGTH);
        }
    }
};
