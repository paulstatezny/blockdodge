'use strict';

var Fluxxor   = require('fluxxor');
var constants = require('../constants');

var BlockStore = Fluxxor.createStore({
    initialize : function()
    {
        this.blocks = [];
        this.player = {};
        this.lost   = false;

        this.bindActions(
            constants.GENERATE_BLOCKS, 'onGenerateBlocks',
            constants.RESET_PLAYER, 'onResetPlayer',
            constants.INCREMENT_FRAME, 'onIncrementFrame'
        );
    },

    onGenerateBlocks : function(blocks)
    {
        this.blocks = blocks;

        this.emit('change');
    },

    onResetPlayer : function(player)
    {
        this.player = player;

        this.emit('change');
    },

    onIncrementFrame : function(payload)
    {
        this.player = payload.player;
        this.blocks = payload.blocks;
        this.lost   = payload.lost;

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
