/** @jsx React.DOM */
'use strict';

var React  = require('react');
var Player = require('./player');
var Block  = require('./block');
var _      = require('underscore');

var keys = {
    LEFT  : 37,
    RIGHT : 39,
    SPACE : 32
};

var validKeys = [37, 39, 32];

var direction = {
    LEFT  : -1,
    RIGHT : 1
};

var VELOCITY     = 1;
var MAX_POSITION = 500;

module.exports = React.createClass({

    displayName : 'GameWindow',

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

        if (e.keyCode === keys.LEFT) {
            this.setState({
                direction       : direction.LEFT,
                playerXPosition : this.getNewPlayerPosition(direction.LEFT)
            });
        } else if (e.keyCode === keys.RIGHT) {
            this.setState({
                direction       : direction.RIGHT,
                playerXPosition : this.getNewPlayerPosition(direction.RIGHT)
            });
        } else if (e.keyCode === keys.SPACE && this.state.playing === false) {
            this.setState({playing : true});
        } else if (e.keyCode === keys.SPACE && this.state.playing === true) {
            this.setState({playing : false});
        }
    },

    onKeyUp : function(e)
    {
        e = e || window.event;

        if (! _.contains(validKeys, e.keyCode)) {
            return;
        }

        if (e.keyCode === keys.LEFT && this.state.direction === direction.LEFT) {
            this.setState({direction : null});
        } else if (e.keyCode === keys.RIGHT && this.state.direction === direction.RIGHT) {
            this.setState({direction : null});
        }
    },

    getNewPlayerPosition : function(dir)
    {
        if (dir === direction.RIGHT && this.state.playerXPosition < MAX_POSITION) {
            return this.state.playerXPosition + VELOCITY;
        } else if (dir === direction.LEFT && this.state.playerXPosition > 0) {
            return this.state.playerXPosition - VELOCITY;
        }
    },

    getInitialState : function()
    {
        return {
            // Player position (in pixels) across the screen.
            playerXPosition : 300,

            // Player position (in pixels) ahead of the starting line
            playerYPosition : 0,

            // Array of blocks
            blocks : this.generateBlocks(),

            // Whether we are currently playing
            playing : false,

            // Current direction of player movement
            direction : null
        };
    },

    generateBlocks : function()
    {
        return [
            {x: 500, y: 100},
            {x: 200, y: 1200},
            {x: 100, y: 1800},
            {x: 50, y: 2400}
        ];
    },

    renderPlayer : function()
    {
        return <Player position={this.state.playerXPosition} />;
    },

    renderBlocks : function()
    {
        var blocks = [];
        var self   = this;

        _.each(this.state.blocks, function(block, index) {
            blocks.push(
                <Block
                    key       = {'block-' + index}
                    xPosition = {block.x}
                    yPosition = {self.state.playerYPosition - block.y}
                />
            );
        });

        return blocks;
    },

    incrementFrame : function()
    {
        this.setState({
            playerYPosition : this.state.playerYPosition + 1
        });
    },

    render : function()
    {
        return (
            <div className='game__window'>
                {this.renderPlayer()}
                {this.renderBlocks()}
            </div>
        );
    }

});
