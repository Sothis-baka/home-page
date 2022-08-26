import React from 'react';

const sections: string[] = [
    'About', 'Contact'
];

const Nav = () => (
    <ul className='nav'>
        {
            sections.map(
                s => (
                    <a href={`#${s}`} className='nav__link'>
                        <li>{ s }</li>
                    </a>
                )
            )
        }
    </ul>
);

export default Nav;