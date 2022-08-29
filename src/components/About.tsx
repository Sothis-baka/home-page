import React from 'react';

import Bio from './about/Bio';
import Experience from './about/Experience';
import Education from './about/Education';
import Skill from './about/Skill';


const About = () => (
    <div id='About' className='about section'>
        <div className='section__title'>
            ABOUT
        </div>

        <Bio/>
        <Experience/>
        <Education/>
        <Skill/>
    </div>
);

export default React.memo(About);