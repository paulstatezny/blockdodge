'use strict';

var constants          = require('../constants');
var playerMovement     = require('../util/player-movement');
var collisionDetection = require('../util/collision-detection');

var generateHardCodedBlocks = function() {
    return [
        {x: 400, y: 380},
        {x: 200, y: 1200},
        {x: 100, y: 1800},
        {x: 50, y: 2400},
        {x: 360, y: 2800},
        {x: 260, y: 3200},
        {x: 160, y: 3600},
        {x: 260, y: 4000},
        {x: 360, y: 4400},
        {x: 160, y: 4600}
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
        var payload, lost;

        player = playerMovement.getNewPosition(player, direction);
        lost   = collisionDetection.playerCollidedWithABlock(player, blocks);

        payload = {
            player  : player,
            blocks  : blocks,
            lost    : lost,
            playing : ! lost
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
