import React from 'react';
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import WorkArea from '../components/WorkArea';

const Work = () => (
    <div className='work page'>
        <Nav/>
        <WorkArea/>
        <Contact/>
    </div>
);


export default React.memo(Work);