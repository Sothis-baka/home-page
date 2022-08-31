import React from 'react';
import { mySkills } from '../../utils/constants';

const Skill = ()=> (
    <div className='section__module'>
        <div className='section__module__title'>
            Skill
        </div>

        <div className='section__module__row'>
            {
                Array.from(mySkills.keys()).map(
                    (k: string) => {
                        const list: (string[]|undefined) = mySkills.get(k);

                        return (
                            <div className='section__module__card section__module__card--center' key={`skill_${k}`}>
                                <div className='section__module__card__title' key={ k }>{ k }</div>
                                <div className='section__module__card__br'>
                                </div>
                                <ul>
                                    {
                                        list?.map(
                                            (value: string) => (
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

export default React.memo(Skill);