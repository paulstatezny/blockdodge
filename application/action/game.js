'use strict';

var constants = require('../constants');

var generateHardCodedBlocks = function() {
    return [
        {x: 400, y: 380},
        {x: 200, y: 1200},
        {x: 100, y: 1800},
        {x: 50, y: 2400}
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

    getInitialPlayer : function()
    {
        return {
            x : 300,
            y : 0
        };
    }
};
