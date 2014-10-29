'use strict';

var _         = require('underscore');
var direction = require('./direction');

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
        e = e || window.event;

        if (! _.contains(validKeys, e.keyCode)) {
            return;
        }

        if (e.keyCode === keys.RIGHT && this.state.direction === direction.RIGHT) {
            return;
        }

        if (e.keyCode === keys.LEFT && this.state.direction === direction.LEFT) {
            return;
        }

        if (e.keyCode === keys.SPACE && this.state.playing === false) {
            this.startGame();
        } else if (e.keyCode === keys.SPACE && this.state.playing === true) {
            this.resetGame();
        } else if (this.state.playing === false) {
            return;
        }

        if (e.keyCode === keys.LEFT) {
            this.setDirection(direction.LEFT);
        } else if (e.keyCode === keys.RIGHT) {
            this.setDirection(direction.RIGHT);
        }
    },

    onKeyUp : function(e)
    {
        e = e || window.event;

        if (! _.contains(validKeys, e.keyCode)) {
            return;
        }

        if (e.keyCode === keys.LEFT && this.state.direction === direction.LEFT) {
            this.setDirection(null);
        } else if (e.keyCode === keys.RIGHT && this.state.direction === direction.RIGHT) {
            this.setDirection(null);
        }
    },

    startGame : function()
    {
        this.setState({playing : true});
    },

    resetGame : function()
    {
        this.setState(this.getInitialState());
    },

    setDirection : function (direction)
    {
        this.setState({
            direction : direction
        });
    }
};
