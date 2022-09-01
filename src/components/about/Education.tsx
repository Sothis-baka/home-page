import React from 'react';
import { myEducations } from '../../utils/constants';

const Education = () => (
    <div className='section__module'>
        <div className='section__module__title'>
            Education
        </div>

        <div className='section__module__row'>
            {
                myEducations.map(
                    e => (
                        <div className='card card--clickable' key={`edu_${e.institution}`}>
                            <div className='card__title--bold'>{ e.institution }</div>
                            <div>{ e.major }</div>
                            <div>{ e.time }</div>
                        </div>
                    )
                )
            }
        </div>
    </div>
);

export default React.memo(Education);