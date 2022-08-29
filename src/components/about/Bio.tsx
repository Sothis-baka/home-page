import React from 'react';

import photo from '../../sources/photo.png';
import constants from '../../utils/constants';

const Bio = () => (
    <div className='section__module'>
        <div className='section__module__title'>
            Bio
        </div>

        <div className='section__module__row'>
            <img src={ photo } loading='lazy' alt="Sothis's icon" className='section__photo'/>
            <div>
                { constants.myIntro }
            </div>
        </div>
    </div>
);

export default React.memo(Bio);