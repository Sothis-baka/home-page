import React from 'react';
import ArrowUp from '../../icons/ArrowUp';
import Github from '../../icons/Github';
import Linkedin from '../../icons/Linkedin';
import Email from '../../icons/Email';
import Discord from '../../icons/Discord';

const Contact = () => (
    <div className='section__module'>
        <ArrowUp className='icon icon--extra-large contact__scroll-up-icon'/>

        <div className='section__module__title'>
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

export default Contact;