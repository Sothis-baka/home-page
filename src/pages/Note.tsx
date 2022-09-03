import React from 'react';

import Nav from '../components/Nav';
import Contact from '../components/Contact';
import { myNotes } from '../utils/constants';
import NoteCard from '../components/note/NoteCard';


const Note = () => (
    <div className='note page'>
        <Nav/>
        <div className='section'>
            <div className='section__title'>
                Note
            </div>

            <div className='section__module'>
                {
                    myNotes.map(
                        n => <NoteCard n={ n } key={ n.name }/>
                    )
                }
            </div>
        </div>
        <Contact/>
    </div>
);

export default React.memo(Note);

