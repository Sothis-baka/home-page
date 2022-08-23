import React from 'react';

import '../styles/decoration.scss';

import footprint from '../sources/decor-footprint.png';
import icon from '../sources/docor-icon.png';

const Decoration = () => (
    <div className='decor--outer'>
        <img src={ footprint } loading='lazy' alt='' className='decor--inner decor--inner__large decor--inner__bottom-left'/>
        <img src={ icon } loading='lazy' alt='' className='decor--inner decor--inner__bottom-right'/>
    </div>
);

export default Decoration;