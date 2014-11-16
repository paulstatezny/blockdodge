'use strict';

var constants = require('../constants');

module.exports = {
    generateBlocks : function()
    {
        var blocks = this.generateHardCodedBlocks();

        this.dispatch(constants.GENERATE_BLOCKS, blocks);
    },

    resetPlayer : function()
    {
        var player = {
            x : 300,
            y : 0
        };

        this.dispatch(constants.RESET_PLAYER, player);
    },

    incrementFrame : function(player, blocks)
    {
        var payload;

        payload = {
            player : player,
            blocks : blocks,
            lost   : false
        }

        this.dispatch(constants.INCREMENT_FRAME, payload);
    },

    generateHardCodedBlocks : function()
    {
        return [
            {x: 400, y: 380},
            {x: 200, y: 1200},
            {x: 100, y: 1800},
            {x: 50, y: 2400}
        ];
    }
};
