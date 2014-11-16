'use strict';

var constants = require('../constants');

module.exports = {
    reset : function()
    {
        var player, blocks, payload;

        player = this.getInitialPlayer();
        blocks = this.generateHardCodedBlocks();

        payload = {
            player : player,
            blocks : blocks,
            lost   : false
        };

        this.dispatch(constants.RESET_GAME, player);
    },

    incrementFrame : function(player, blocks)
    {
        var payload;

        payload = {
            player : player,
            blocks : blocks,
            lost   : false
        };

        this.dispatch(constants.INCREMENT_FRAME, payload);
    },

    togglePause : function()
    {
        this.dispatch(constants.TOGGLE_PAUSE);
    },

    generateHardCodedBlocks : function()
    {
        return [
            {x: 400, y: 380},
            {x: 200, y: 1200},
            {x: 100, y: 1800},
            {x: 50, y: 2400}
        ];
    },

    getInitialPlayer : function()
    {
        return {
            x : 300,
            y : 0
        };
    }
};
