import React from 'react';
import { Link } from 'react-router-dom';

import TagArea from '../TagArea';
import { Note } from '../../utils/types/Note';

const NoteCard = ({ n }: { n:Note }) => (
    <div className='section__module__row'>
        <Link to={ `/Note/${ n.filename }` } className='card card--clickable'>
            <div className='card__title--bold'>
                { n.name }
            </div>
            <TagArea tags={ n.tags }/>
        </Link>
    </div>
);

export default React.memo(NoteCard);