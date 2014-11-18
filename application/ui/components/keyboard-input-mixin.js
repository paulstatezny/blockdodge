/* global window, document */
'use strict';

var _         = require('underscore');
var direction = require('./direction');
var constants = require('../../constants');

var keys = {
    LEFT  : 37,
    RIGHT : 39,
    SPACE : 32
};

var validKeys = [37, 39, 32];

module.exports = {
    componentWillMount : function()
    {
        document.onkeydown = this.onKeyDown;
        document.onkeyup   = this.onKeyUp;
    },

    componentWillUnmount : function()
    {
        document.onkeydown = undefined;
        document.onkeyup   = undefined;
    },

    onKeyDown : function(e)
    {
        var game = this.getFlux().actions.game;

        e = e || window.event;

        if (this.ignoreKeyDown(e.keyCode)) {
            return;
        }

        if (e.keyCode === keys.SPACE && this.state.playing === false) {
            game.start();
        } else if (e.keyCode === keys.SPACE && this.state.playing === true) {
            game.reset();
        } else if (this.state.playing === false) {
            return;
        }

        this.handleArrowKeysDown(e.keyCode);
    },

    onKeyUp : function(e)
    {
        var game = this.getFlux().actions.game;

        e = e || window.event;

        if (! _.contains(validKeys, e.keyCode)) {
            return;
        }

        if (e.keyCode === keys.LEFT && this.state.direction === direction.LEFT) {
            game.setDirection(null);
        } else if (e.keyCode === keys.RIGHT && this.state.direction === direction.RIGHT) {
            game.setDirection(null);
        }
    },

    /**
     * Whether to ignore a keydown action, based on whether it contains information
     * that we care about
     *
     * @return {Boolean}
     */
    ignoreKeyDown : function(keyCode)
    {
        var direction = this.state.direction;

        if (! _.contains(validKeys, keyCode)) {
            return true;
        }

        if (keyCode === keys.RIGHT && direction === constants.RIGHT) {
            return true;
        }

        if (keyCode === keys.LEFT && direction === constants.LEFT) {
            return true;
        }

        return false;
    },

    handleArrowKeysDown : function(keyCode)
    {
        var game = this.getFlux().actions.game;

        if (keyCode === keys.LEFT) {
            game.setDirection(constants.LEFT);
        } else if (keyCode === keys.RIGHT) {
            game.setDirection(constants.RIGHT);
        }
    }
};
