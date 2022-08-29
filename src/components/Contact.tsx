import React from 'react';
import Github from '../icons/Github';
import Linkedin from '../icons/Linkedin';
import Email from '../icons/Email';
import Discord from '../icons/Discord';
import ArrowUp from '../icons/ArrowUp';

const Contact = () => (
    <div id='Contact' className='contact section'>
        <ArrowUp className='icon icon--extra-large'/>
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