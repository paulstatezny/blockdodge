/** @jsx React.DOM */
'use strict';

var React      = require('react');
var GameWindow = require('../components/game-window');

module.exports = React.createClass({

    displayName : 'HomeModule',

    render : function()
    {
        return (
            <div className='game'>
                <GameWindow />
            </div>
        );
    }

});
