'use strict';

var Fluxxor   = require('fluxxor');
var constants = require('../constants');

var BlockStore = Fluxxor.createStore({
    initialize : function()
    {
        this.blocks = [];
        this.player = {};

        this.bindActions(
            constants.GENERATE_BLOCKS, 'onGenerateBlocks',
            constants.RESET_PLAYER, 'onResetPlayer'
        );
    },

    onGenerateBlocks : function(blocks)
    {
        this.blocks = blocks;
    },

    onResetPlayer : function(player)
    {
        this.player = player;
    },

    getBlocks : function()
    {
        return this.blocks;
    }
});
