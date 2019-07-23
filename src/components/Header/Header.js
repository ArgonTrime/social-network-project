import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://styleguide.audiomack.com/styleguide/assets/images/logos/mark-orange.png'/>
        </header>
    );
}

export default Header;