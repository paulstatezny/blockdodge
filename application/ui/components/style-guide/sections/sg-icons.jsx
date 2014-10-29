/** @jsx React.DOM */
'use strict';

var React = require('react');
var Icon  = require('../../icon/icon');

module.exports = React.createClass({

    displayName : 'Icons',

    render : function()
    {
        return (
            <div className='sg-page'>
                <h1 className='sg-h1'>{'Icons'}</h1>
                <div className='sg-icons'>
                    <span className='sg-icon'>
                        <Icon icon='navicon' />
                        <span className='sg-icon__name'>
                            <strong className='strong'>Icon: </strong>
                            {'navicon'}
                        </span>
                    </span>
                    <span className='sg-icon'>
                        <Icon icon='caret' />
                        <span className='sg-icon__name'>
                            <strong className='strong'>Icon: </strong>
                            {'caret'}
                        </span>
                    </span>
                </div>
                <hr className='sg-hr' />
                <div className='row'>
                    <div className='medium-4 columns'>
                        <h2 className='sg-h2'>{'Icon sizes'}</h2>
                        <Icon icon='navicon' size='x-small' /> Extra Small
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' /> Small
                        <br />
                        <br />
                        <Icon icon='navicon' size='medium' /> Medium
                        <br />
                        <br />
                        <Icon icon='navicon' size='large' /> Large
                        <br />
                        <br />
                        <Icon icon='navicon' size='x-large' /> Extra Large
                        <br />
                        <br />
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='sg-h2'>{'Icon rotation'}</h2>
                        <Icon icon='caret' size='small' rotate={0} /> 0deg Rotation
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={45} /> 45deg Rotation
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={90} /> 90deg Rotation
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={180} /> 180deg Rotation
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={270} /> 270deg Rotation
                        <br />
                        <br />
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='sg-h2'>{'Icon colors'}</h2>
                        <Icon icon='navicon' size='small' color='black' /> Black fill
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' color='white' /> White fill
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' color='primary' /> Primary fill
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' color='secondary' /> Secondary fill
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' color='tertiary' /> Tertiary fill
                        <br />
                        <br />
                    </div>
                </div>

                <hr className='sg-hr' />
            </div>
        );
    }

});
