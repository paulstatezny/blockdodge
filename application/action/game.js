'use strict';

var constants          = require('../constants');
var playerMovement     = require('../util/player-movement');
var collisionDetection = require('../util/collision-detection');

var generateHardCodedBlocks = function() {
    return [
        {x: 400, y: 380},
        {x: 200, y: 500},
        {x: 100, y: 800},
        {x: 50, y: 950},
        {x: 360, y: 1200},
        {x: 260, y: 1350},
        {x: 160, y: 1550},
        {x: 260, y: 1800},
        {x: 360, y: 1900},
        {x: 160, y: 2100}
    ];
};

module.exports = {
    reset : function()
    {
        this.dispatch(constants.RESET_GAME, {
            player : constants.INITIAL_PLAYER,
            blocks : generateHardCodedBlocks(),
            lost   : false
        });
    },

    start : function()
    {
        this.dispatch(constants.START_GAME);
    },

    incrementFrame : function(player, blocks, direction)
    {
        var payload, lost, blocksAhead;

        player = playerMovement.getNewPosition(player, direction);
        lost   = collisionDetection.playerCollidedWithABlock(player, blocks);

        blocksAhead = blocks.reduce(function (oneOrMoreAhead, block) {
            if (oneOrMoreAhead) {
                return true;
            }

            if (block.y + constants.BLOCK_SIZE > player.y) {
                return true;
            }

            return false;
        }, false);

        payload = {
            player  : player,
            blocks  : blocks,
            lost    : lost,
            playing : blocksAhead && ! lost,
            won     : ! blocksAhead
        };

        this.dispatch(constants.INCREMENT_FRAME, payload);
    },

    togglePause : function()
    {
        this.dispatch(constants.TOGGLE_PAUSE);
    },

    setDirection : function(direction)
    {
        this.dispatch(constants.SET_DIRECTION, direction);
    }
};
