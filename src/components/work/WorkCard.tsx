import React from 'react';
import TagArea from './TagArea';
import { Work } from '../../utils/types/Work';

const WorkCard = ({ w }: { w: Work }) => (
    <div className='section__module__row'>
        <div className='card'>
            <div className='card__title--bold'>{ w.name }</div>
            <div>{ w.description }</div>
            <TagArea tags={ w.tags }/>
            <div>
                { w.source_code && <a className='card__link' href={ w.source_code } target='_blank' rel='noreferrer'>Source Code</a> }
                { w.deployment && <a className='card__link' href={ w.deployment } target='_blank' rel='noreferrer'>Deployment</a> }
            </div>
        </div>
    </div>
);

export default React.memo(WorkCard);