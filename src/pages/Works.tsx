import React from 'react';
import Nav from '../components/Nav';
import Contact from '../components/Contact';

const Works = () => (
    <div className='note page'>
        <Nav/>
        <Contact/>
    </div>
);

export default React.memo(Works);