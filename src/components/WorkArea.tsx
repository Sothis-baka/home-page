import React from 'react';
import { myWorks } from '../utils/constants';
import WorkCard from './work/WorkCard';

const WorkArea = () => (
    <div className='section'>
        <div className='section__title'>
            Work
        </div>

        <div className='section__module'>
            {
                myWorks.map(w => (
                    <WorkCard w={ w } key={`work_${ w.name }`}/>
                ))
            }
        </div>
    </div>
);

export default React.memo(WorkArea);