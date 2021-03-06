/** @jsx React.DOM */
'use strict';

var React              = require('react');
var Fluxxor            = require('fluxxor');
var FluxChildMixin     = Fluxxor.FluxChildMixin(React);
var StoreWatchMixin    = Fluxxor.StoreWatchMixin;
var Player             = require('./player');
var Block              = require('./block');
var GameLoopMixin      = require('./game-loop-mixin');
var KeyboardInputMixin = require('./keyboard-input-mixin');
var _                  = require('underscore');
var constants          = require('../../constants');

module.exports = React.createClass({

    displayName : 'GameWindow',

    mixins : [
        GameLoopMixin,
        KeyboardInputMixin,
        FluxChildMixin,
        StoreWatchMixin('GameStore')
    ],

    componentDidMount : function()
    {
        var game = this.getFlux().actions.game;

        game.reset();
    },

    getStateFromFlux : function()
    {
        return this.getFlux().store('GameStore').getState();
    },

    renderPlayer : function()
    {
        return <Player position={this.state.player.x} />;
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
                    yPosition = {self.state.player.y - block.y + constants.WINDOW_SIZE}
                />
            );
        });

        return blocks;
    },

    renderMessage : function()
    {
        var message;

        if (this.state.lost === true) {
            message = 'You lost the game!';
        } else if (this.state.won === true) {
            message = 'You won the game!';
        }

        if (! message) {
            return;
        }

        return <span className='message'>{message}</span>;
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
