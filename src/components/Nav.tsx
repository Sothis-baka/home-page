import React, {useState} from 'react';
import Menu from '../icons/Menu';
import classNames from 'classnames';
import Exit from '../icons/Exit';

const sections: string[] = [
    'About', 'Contact'
];

const Nav = () => {
    const [isShowing, setShowing] = useState<boolean>(false);

    return (
        <ul className={ classNames('nav', isShowing && 'nav--active') }>
            {
                isShowing
                    ?
                    <>
                        {
                            sections.map(
                                s => (
                                    <a href={`#${s}`} className='nav__link'>
                                        <li>{ s }</li>
                                    </a>
                                )
                            )
                        }
                        <Exit className='icon icon--large nav__btn' handleClick={ () => setShowing(false) }/>
                    </>
                    :
                    <Menu className='icon icon--large nav__btn' handleClick={ () => setShowing(true) }/>
            }
        </ul>
    );
}

export default React.memo(Nav);