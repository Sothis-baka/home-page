import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import Menu from '../icons/Menu';
import Exit from '../icons/Exit';
import '../styles/nav.scss';

const Nav = () => {
    const [isShowing, setShowing] = useState<boolean>(false);
    const location = useLocation().pathname;

    return (
        <ul className={ classNames('nav', isShowing && 'nav--active') }>
            {
                isShowing
                    ?
                    <>
                        <Link to='/Home' className={ classNames('nav__link', location==='/Home' && 'nav__link--active') }>
                            <li>Home</li>
                        </Link>
                        <Link to='/Works' className={ classNames('nav__link', location==='/Works' && 'nav__link--active') }>
                            <li>Works</li>
                        </Link>
                        <Link to='/Notes' className={ classNames('nav__link', location==='/Notes' && 'nav__link--active') }>
                            <li>Notes</li>
                        </Link>
                        <a href='#Contact' className='nav__link'>
                            <li>Contact</li>
                        </a>
                        <Exit className='icon icon--large nav__btn' handleClick={ () => setShowing(false) }/>
                    </>
                    :
                    <Menu className='icon icon--large nav__btn' handleClick={ () => setShowing(true) }/>
            }
        </ul>
    );
}

export default React.memo(Nav);