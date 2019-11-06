import React from 'react';
import s from './User.module.css';
import userAvatar from '../../image/user.png';
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgres, unfollow, follow}) => {
    return (
        <div className={s.container}>
            <div className={s.box1}>
                <div>
                    <NavLink to={'/profile/' + user.id}><img
                        src={user.photos.small != null ? user.photos.small : userAvatar}/></NavLink>
                </div>
                <div>{user.followed
                    ? <button disabled={followingInProgres.some(id => id === user.id)} className={s.btnU}
                              onClick={() => {
                                  unfollow(user.id);
                              }}>Unfollow</button>


                    : <button disabled={followingInProgres.some(id => id === user.id)} className={s.btnF}
                              onClick={() => {
                                  follow(user.id);
                              }}>Follow</button>}
                </div>
            </div>

            <div className={s.box2}>
                <h1>{user.name}</h1>
                <p>{user.status}</p>
            </div>
            <div className={s.box3}>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </div>
        </div>
    )
};
export default User;