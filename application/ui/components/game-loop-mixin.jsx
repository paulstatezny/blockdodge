/** @jsx React.DOM */
'use strict';

var _         = require('underscore');
var direction = require('./direction');

var FRAME_LENGTH = 60;
var MAX_POSITION = 560;
var XVELOCITY    = 15;
var YVELOCITY    = 10;
var BLOCK_SIZE   = 60;
var PLAYER_SIZE  = 40;

module.exports = {
    componentDidUpdate : function(prevProps, prevState)
    {
        if (this.state.playing === true && prevState.playerYPosition !== this.state.playerYPosition) {
            _.delay(this.incrementFrame, FRAME_LENGTH);
        }
    },

    incrementFrame : function()
    {
        if (this.playerCollidedWithABlock() === true) {
            this.setGameLost();
        }

        this.setState({
            playerXPosition : this.getNewPlayerPosition(),
            playerYPosition : this.state.playerYPosition + YVELOCITY
        });
    },

    playerCollidedWithABlock : function()
    {
        var blockPlayerHit = _.find(this.state.blocks, this.playerCollidedWithThisBlock, this);

        return ! _.isUndefined(blockPlayerHit);
    },

    /**
     * @link https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
     */
    playerCollidedWithThisBlock : function(block)
    {
        if (this.state.playerXPosition < block.x + BLOCK_SIZE &&
            this.state.playerXPosition + PLAYER_SIZE > block.x &&
            this.state.playerYPosition < block.y + BLOCK_SIZE &&
            this.state.playerYPosition + PLAYER_SIZE > block.y) {
            return true;
        }
    },

    setGameLost : function()
    {
        this.setState({
            playing : false,
            lost    : true
        });
    },

    getNewPlayerPosition : function()
    {
        var step = 0;

        if (this.state.direction === direction.RIGHT && this.state.playerXPosition < MAX_POSITION) {
            step = XVELOCITY;
        } else if (this.state.direction === direction.LEFT && this.state.playerXPosition > 0) {
            step = -XVELOCITY;
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
            direction : null,

            // Whether the player just lost the game
            lost : false
        };
    }
};
