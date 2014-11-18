'use strict';

var _         = require('underscore');
var constants = require('../constants');

module.exports = {
    playerCollidedWithABlock : function(player, blocks)
    {
        var blockPlayerHit, self = this;

        _.each(blocks, function (block) {
            if (self.playerCollidedWithThisBlock(player, block)) {
                blockPlayerHit = block;
            }
        });

        return ! _.isUndefined(blockPlayerHit);
    },

    /**
     * @link https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
     */
    playerCollidedWithThisBlock : function(player, block)
    {
        var notRight, notLeft, notAbove, notBelow;

        notRight = player.x < block.x + constants.BLOCK_SIZE;
        notLeft  = player.x + constants.PLAYER_SIZE > block.x;
        notAbove = player.y < block.y + constants.BLOCK_SIZE;
        notBelow = player.y + constants.PLAYER_SIZE > block.y;

        return notRight && notLeft && notAbove && notBelow;
    }

};
