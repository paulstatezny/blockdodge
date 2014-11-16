'use strict';

var Fluxxor   = require('fluxxor');
var constants = require('../constants');

var GameStore = Fluxxor.createStore({
    initialize : function()
    {
        this.blocks  = [];
        this.player  = {};
        this.lost    = false;
        this.playing = false;

        this.bindActions(
            constants.RESET_GAME, 'onResetGame',
            constants.INCREMENT_FRAME, 'onIncrementFrame',
            constants.TOGGLE_PAUSE, 'onTogglePause'
        );
    },

    onResetGame : function(payload)
    {
        this.player = payload.player;
        this.blocks = payload.blocks;
        this.lost   = payload.lost;

        this.emit('change');
    },

    onIncrementFrame : function(payload)
    {
        this.player = payload.player;
        this.blocks = payload.blocks;
        this.lost   = payload.lost;

        this.emit('change');
    },

    onTogglePause : function()
    {
        this.playing = ! this.playing;

        this.emit('change');
    },

    getState : function()
    {
        return {
            blocks : this.blocks,
            player : this.player,
            lost   : this.lost
        };
    }
});

module.exports = GameStore;
