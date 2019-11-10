import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://styleguide.audiomack.com/styleguide/assets/images/logos/mark-orange.png'/>
            {props.isAuth
                ? <div className={s.loginBlock}>
                    <span className={s.loginBlock}>{props.login} - <button className={s.btnU} onClick={props.logout}>Logout</button></span>
                  </div>
                : <div className={s.loginBlock}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>}

        </header>
    );
};

export default Header;