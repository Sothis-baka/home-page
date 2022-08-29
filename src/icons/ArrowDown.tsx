import React from 'react';

const ArrowDown = ({ className }: { className: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.902 41.933" className={ className }>
        <g id="Group_1" data-name="Group 1" transform="translate(-923.369 -1000.533)">
            <path id="Path_6" data-name="Path 6" d="M0,0,47.958.1l.01,7.9L.01,7.9Z" transform="translate(929.026 1002.891) rotate(45)" fill="#655057"/>
            <path id="Path_5" data-name="Path 5" d="M0,.025l47.958-.1-.01,7.9-47.958.1Z" transform="translate(994.209 1006.142) rotate(135)" fill="#655057"/>
        </g>
    </svg>
);

export default React.memo(ArrowDown);