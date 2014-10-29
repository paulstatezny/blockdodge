/** @jsx React.DOM */
'use strict';

var React  = require('react');

module.exports = React.createClass({

    displayName : 'Typography',

    render : function()
    {
        return (
            <div className='sg-page'>
                <h1 className='sg-h1'>{'Typography'}</h1>
                <h2 className='sg-h2'>{'Headers'}</h2>

                <h1 className='h1'>{'Heading H1'}</h1>
                <h2 className='h2'>{'Heading H2'}</h2>
                <h3 className='h3'>{'Heading H3'}</h3>
                <h4 className='h4'>{'Heading H4'}</h4>
                <h5 className='h5'>{'Heading H5'}</h5>
                <h6 className='h6'>{'Heading H6'}</h6>

                <hr className='sg-hr' />

                <h2 className='sg-h2'>{'Grouping elements'}</h2>
                <p className='p'><strong className='strong'>Paragraph</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta vehicula mi, vel placerat sem viverra in. Vivamus convallis semper est nec placerat. Phasellus laoreet nibh nec ligula dapibus rutrum id vel purus. Mauris eget fermentum felis. Morbi iaculis sapien et libero accumsan, sagittis maximus erat laoreet. Curabitur vitae orci commodo libero convallis molestie. Fusce tincidunt urna varius nulla egestas aliquet. Donec porttitor, mi fermentum commodo hendrerit, velit nisl venenatis lorem, quis porttitor risus elit quis orci.</p>

                <blockquote className='blockquote'>
                    <strong className='strong'>Blockquote</strong> Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur sapien ut diam gravida, at faucibus justo tristique. Ut sed tempor ex, sit amet cursus ante. Nulla venenatis tincidunt arcu, non interdum nibh ultrices id. Nulla pellentesque mi ut nibh posuere sollicitudin.
                </blockquote>

                <hr className='sg-hr' />

                <h2 className='sg-h2'>{'Inline elements'}</h2>
                <p className='p'>
                    <a className='a'>{'Anchor'}</a>
                    <strong className='strong'> Strong Tag</strong>, <b className='b'>B Tag</b>,
                    <em className='em'> Em tag</em>, <i className='i'>I tag</i>,
                    <sub className='sub'> Sub tag</sub>, <sup className='sup'>Sup tag</sup>,
                    <dfn className='dfn'> Dfn tag</dfn>
                </p>
            </div>
        );
    }

});
