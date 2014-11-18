'use strict';

var WINDOW_SIZE    = 600;
var PLAYER_SIZE    = 40;
var INITIAL_PLAYER = {
    x : 300,
    y : 0
};


module.exports = {
    // Actions
    FORWARD         : 'FORWARD',
    INCREMENT_FRAME : 'INCREMENT_FRAME',
    NAVIGATE        : 'NAVIGATE',
    RESET_GAME      : 'RESET_GAME',
    SET_DIRECTION   : 'SET_DIRECTION',
    START_GAME      : 'START_GAME',
    TOGGLE_PAUSE    : 'TOGGLE_PAUSE',

    // Constants with meaningful values
    BLOCK_SIZE      : 60,
    FRAME_LENGTH    : 20,
    INITIAL_PLAYER  : INITIAL_PLAYER,
    LEFT            : 1,
    MAX_POSITION    : WINDOW_SIZE - PLAYER_SIZE,
    PLAYER_SIZE     : PLAYER_SIZE,
    RIGHT           : -1,
    WINDOW_SIZE     : WINDOW_SIZE,
    XVELOCITY       : 15,
    YVELOCITY       : 10
};
