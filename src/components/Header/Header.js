import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../image/logo.svg';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div>
                    <img src={logo}/>
                    <span className={s.slogan}>There are no users, only friends here!</span>
                </div>
                {props.isAuth
                    ? <div className={s.loginBlock}>
                        <span className={s.loginBlock}>{props.login} - <button className={s.btnU}
                                                                               onClick={props.logout}>Logout</button></span>
                    </div>
                    : <div className={s.loginBlock}>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>}
            </div>

        </header>
    );
};

export default Header;