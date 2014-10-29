'use strict';

var _           = require('underscore');
var BLOCK_SIZE  = 60;
var PLAYER_SIZE = 40;

module.exports = {
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
    }
};
