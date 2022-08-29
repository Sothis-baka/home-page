import React from 'react';
import constants from '../../utils/constants';

const Education = () => (
    <div className='section__module'>
        <div className='section__module__title'>
            Education
        </div>

        <div className='section__module__row'>
            {
                constants.myEducations.map(
                    e => (
                        <div className='section__module__card' key={`edu_${e.institution}`}>
                            <div className='section__module__card__title--bold'>{ e.institution }</div>
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