import React from 'react';

import Cover from '../components/Cover';
import Nav from '../components/Nav';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => (
    <div className='home page'>
        <Cover/>
        <Nav/>
        <About/>
        <Contact/>
    </div>
);

export default React.memo(Home);