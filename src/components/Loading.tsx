import React from 'react';

import '../styles/loading.scss';

const Loading = () => (
    <div className='loading'>
        <div className='loading__outer'>
        </div>
        <div className='loading__inner'>
            LOADING
        </div>
    </div>
);

export default React.memo(Loading);