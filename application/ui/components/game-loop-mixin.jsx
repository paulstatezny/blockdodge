/** @jsx React.DOM */
'use strict';

var _         = require('underscore');
var direction = require('./direction');

var FRAME_LENGTH = 30;
var MAX_POSITION = 700;
var VELOCITY     = 10;

module.exports = {
    componentDidUpdate : function(prevProps, prevState)
    {
        if (this.state.playing === true && prevState.playerYPosition !== this.state.playerYPosition) {
            _.delay(this.incrementFrame, FRAME_LENGTH);
        }
    },

    incrementFrame : function()
    {
        this.setState({
            playerXPosition : this.getNewPlayerPosition(),
            playerYPosition : this.state.playerYPosition + 1
        });
    },

    getNewPlayerPosition : function()
    {
        var step = 0;

        if (this.state.direction === direction.RIGHT && this.state.playerXPosition < MAX_POSITION) {
            step = VELOCITY;
        } else if (this.state.direction === direction.LEFT && this.state.playerXPosition > 0) {
            step = -VELOCITY;
        }

        return this.state.playerXPosition + step;
    },

    getInitialState : function()
    {
        return {
            // Player position (in pixels) across the screen.
            playerXPosition : 300,

            // Player position (in pixels) ahead of the starting line
            playerYPosition : 0,

            // Array of blocks
            blocks : this.generateBlocks(),

            // Whether we are currently playing
            playing : false,

            // Current direction of player movement
            direction : null
        };
    }
};
