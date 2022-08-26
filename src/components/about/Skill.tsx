import React from 'react';
import constants from '../../utils/constants';

const Skill = ()=> (
    <div className='section__module'>
        <div className='section__module__title'>
            Skill
        </div>

        <div className='section__module__row'>
            {
                Array.from(constants.mySkills.keys()).map(
                    (k) => {
                        const list: (string[]|undefined) = constants.mySkills.get(k);

                        return (
                            <div className='section__module__card section__module__card--center' key={`skill_${k}`}>
                                <div className='section__module__card__title' key={ k }>{ k }</div>
                                <div className='section__module__card__br'></div>
                                <ul>
                                    {
                                        list?.map(
                                            value => (
                                                <div key={ `${k}_${value}` }>
                                                    { value }
                                                </div>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                        );
                    }
                )
            }
        </div>
    </div>
);

export default Skill;