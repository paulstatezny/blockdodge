/** @jsx React.DOM */
'use strict';

var React                   = require('react');
var Player                  = require('./player');
var Block                   = require('./block');
var GameLoopMixin           = require('./game-loop-mixin');
var CollisionDetectionMixin = require('./collision-detection-mixin');
var KeyboardInputMixin      = require('./keyboard-input-mixin');
var _                       = require('underscore');

var WINDOW_SIZE = 600;

module.exports = React.createClass({

    displayName : 'GameWindow',

    mixins : [GameLoopMixin, CollisionDetectionMixin, KeyboardInputMixin],

    componentDidMount : function()
    {
        var game = this.getFlux().actions.game;

        game.resetPlayer();
        game.generateBlocks();
    },

    getStateFromFlux : function()
    {
        var blocks = this.getFlux().store('BlockStore').getBlocks();

        return {
            blocks : blocks
        };
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
                    yPosition = {self.state.playerYPosition - block.y + WINDOW_SIZE}
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
