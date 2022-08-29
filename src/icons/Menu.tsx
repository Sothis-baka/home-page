import React, {MouseEventHandler} from 'react';

const Menu = ({ className, handleClick }: { className: string, handleClick: MouseEventHandler }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={ className } viewBox="0 0 16 16" onClick={ handleClick }>
        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
);

export default React.memo(Menu);