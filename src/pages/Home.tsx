import React from 'react';

import Cover from '../components/Cover';
import About from '../components/About';
import '../styles/home.scss';

const Home = () => (
    <div className='home'>
        <Cover/>
        <About/>
    </div>
);

export default React.memo(Home);