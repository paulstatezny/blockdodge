/** @jsx React.DOM */
'use strict';

var _         = require('underscore');
var direction = require('./direction');

var FRAME_LENGTH = 60;
var MAX_POSITION = 500;
var VELOCITY     = 1;

module.exports = {
    componentDidUpdate : function()
    {
        if (this.state.playing) {
            _.delay(this.incrementFrame, FRAME_LENGTH);
        }
    },

    incrementFrame : function()
    {
        this.setState({
            playerYPosition : this.getNewPlayerPosition(this.state.direction)
        });
    },

    getNewPlayerPosition : function(dir)
    {
        if (dir === direction.RIGHT && this.state.playerXPosition < MAX_POSITION) {
            return this.state.playerXPosition + VELOCITY;
        } else if (dir === direction.LEFT && this.state.playerXPosition > 0) {
            return this.state.playerXPosition - VELOCITY;
        }
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
