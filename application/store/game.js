'use strict';

var Fluxxor   = require('fluxxor');
var constants = require('../constants');

var GameStore = Fluxxor.createStore({
    initialize : function()
    {
        this.blocks    = [];
        this.player    = {};
        this.lost      = false;
        this.playing   = false;
        this.direction = null;

        this.bindActions(
            constants.RESET_GAME, 'onResetGame',
            constants.INCREMENT_FRAME, 'onIncrementFrame',
            constants.TOGGLE_PAUSE, 'onTogglePause',
            constants.SET_DIRECTION, 'onSetDirection',
            constants.START_GAME, 'onStartGame'
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
        this.player  = payload.player;
        this.blocks  = payload.blocks;
        this.lost    = payload.lost;
        this.playing = payload.playing;

        this.emit('change');
    },

    onTogglePause : function()
    {
        this.playing = ! this.playing;

        this.emit('change');
    },

    onSetDirection : function(direction)
    {
        this.direction = direction;

        this.emit('change');
    },

    onStartGame : function()
    {
        this.playing  = true;
        this.player.y = 0;

        this.emit('change');
    },

    getState : function()
    {
        return {
            blocks    : this.blocks,
            direction : this.direction,
            lost      : this.lost,
            player    : this.player,
            playing   : this.playing
        };
    }
});

module.exports = GameStore;
