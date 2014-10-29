/** @jsx React.DOM */
'use strict';

var React              = require('react');
var Player             = require('./player');
var Block              = require('./block');
var GameLoopMixin      = require('./game-loop-mixin');
var KeyboardInputMixin = require('./keyboard-input-mixin');
var _                  = require('underscore');

var OFF_SCREEN = 610;

module.exports = React.createClass({

    displayName : 'GameWindow',

    mixins : [GameLoopMixin, KeyboardInputMixin],

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
            if ((self.state.playerYPosition - block.y) > OFF_SCREEN) {
                return;
            }

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

    renderMessage : function()
    {
        if (this.state.lost === false) {
            return;
        }

        return (
            <span className='message'>
                You lost the game!
            </span>
        );
    },

    render : function()
    {
        return (
            <div>
                <div className='game__window'>
                    {this.renderPlayer()}
                    {this.renderBlocks()}
                    {this.renderMessage()}
                </div>
                <p>
                    Playing : {this.state.playing ? 'true' : 'false'}
                    <br />
                    Direction : {this.state.direction}
                </p>
            </div>
        );
    }

});
