/** @jsx React.DOM */
'use strict';

var _         = require('underscore');
var constants = require('../../constants');

module.exports = {
    componentDidMount : function()
    {
        this.incrementFrameDebounced = _.debounce(this.incrementFrame, constants.FRAME_LENGTH);
    },

    componentDidUpdate : function(prevProps, prevState)
    {
        if (this.state.playing === false) {
            return;
        }

        this.incrementFrameDebounced();
    },

    incrementFrame : function()
    {
        var game = this.getFlux().actions.game;

        if (this.state.playing === false) {
            return;
        }

        game.incrementFrame(
            this.state.player,
            this.state.blocks,
            this.state.direction
        );
    }
};
