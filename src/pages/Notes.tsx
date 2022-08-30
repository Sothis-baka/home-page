import React from 'react';
import Nav from '../components/Nav';
import Contact from '../components/Contact';

const Notes = () => (
    <div className='note page'>
        <Nav/>
        <Contact/>
    </div>
);

export default React.memo(Notes);

