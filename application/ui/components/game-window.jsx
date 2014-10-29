/** @jsx React.DOM */
'use strict';

var React  = require('react');
var Player = require('./player');
var Block  = require('./block');
var _      = require('underscore');

module.exports = React.createClass({

    displayName : 'GameWindow',

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
            playing : false
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
