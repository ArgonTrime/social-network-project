import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
    return <div>
        {
            props.users.map(u => <div className={s.container} key={u.id}>
                <div className={s.box1}>
                    <div><img src='https://www.shareicon.net/download/2017/02/05/878221_user_512x512.png'/></div>
                    <div>{u.followCheck ? <button className={s.btnU} onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button className={s.btnF} onClick={() => {props.follow(u.id)}}>Follow</button>}</div>
                </div>

                <div className={s.box2}>
                    <h1>{u.fullname}</h1>
                    <p>{u.status}</p>
                </div>
                <div className={s.box3}>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>

            </div>)
        }
    </div>
};
export default Users;