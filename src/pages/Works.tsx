import React from 'react';
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import WorkArea from '../components/WorkArea';

const Works = () => (
    <div className='work page'>
        <Nav/>
        <WorkArea/>
        <Contact/>
    </div>
);


export default React.memo(Works);