import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://styleguide.audiomack.com/styleguide/assets/images/logos/mark-orange.png'/>
            {props.isAuth ? <span className={s.loginBlock}>{props.login}</span> : <NavLink  className={s.loginBlock} to={'/login'}>Login</NavLink>}

        </header>
    );
};

export default Header;