import React from 'react';

import Cover from '../components/Cover';
import About from '../components/About';
import '../styles/home.scss';
import Contact from '../components/Contact';
import Nav from '../components/Nav';

const Home = () => (
    <div className='home page'>
        <Cover/>
        <Nav/>
        <About/>
        <Contact/>
    </div>
);

export default React.memo(Home);