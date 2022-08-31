import React from 'react';
import { myExperience } from '../../utils/constants';

const Experience = () => (
    <div className='section__module'>
        <div className='section__module__title'>
            Experience
        </div>

        <div className='section__module__row'>
            {
                myExperience.map(
                    e => (
                        <div className='section__module__card' key={`exp_${e.company}`}>
                            <div className='section__module__card__title--bold'>{ e.company }</div>
                            <div>{ e.position }</div>
                            <div>{ e.team }</div>
                            <div>{ e.time }</div>
                        </div>
                    )
                )
            }
        </div>
    </div>
);

export default React.memo(Experience);