import React from 'react';

import Bio from './about/Bio';
import Experience from './about/Experience';
import Education from './about/Education';
import Skill from './about/Skill';
import Contact from './about/Contact';


const About = () => (
    <div id='About' className='about section'>
        <div className='section__title'>
            ABOUT
        </div>

        <Bio/>
        <Experience/>
        <Education/>
        <Skill/>


        <Contact/>
    </div>
);

export default React.memo(About);