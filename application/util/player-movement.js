'use strict';

var constants = require('../constants');

module.exports = {
    getNewPosition : function(player, direction)
    {
        var step = 0;

        if (direction === constants.RIGHT && player.x + constants.XVELOCITY <= constants.MAX_POSITION) {
            step = constants.XVELOCITY;
        } else if (direction === constants.LEFT && player.x - constants.XVELOCITY >= 0) {
            step = -constants.XVELOCITY;
        }

        player.x += step;
        player.y += constants.YVELOCITY;

        return player;
    }
};
