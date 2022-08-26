import React from 'react';
import Github from '../icons/Github';
import Linkedin from '../icons/Linkedin';
import Email from '../icons/Email';
import Discord from '../icons/Discord';

const Contact = () => (
    <div id='Contact' className='contact section'>
        <div className='section__br'>
        </div>

        <div className='section__title'>
            Contact
        </div>

        <div className='contact__btn-group'>
            <Github className='icon icon--extra-large contact__btn'/>
            <Linkedin className='icon icon--extra-large contact__btn'/>
            <Email className='icon icon--extra-large contact__btn'/>
            <Discord className='icon icon--extra-large contact__btn'/>
        </div>
    </div>
);

export default React.memo(Contact);