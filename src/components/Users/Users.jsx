import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userAvatar from '../../image/user.png';

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        })

        // props.setUsers([
        //     {
        //         id: 1,
        //         fullname: 'Ihar',
        //         status:'Learning web-development',
        //         location: {country: 'Belarus', city: 'Minsk'},
        //         followCheck: false,
        //         avatarUrl: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'
        //     },
        //     {
        //         id: 2,
        //         fullname: 'Julia',
        //         status:'Looking for the best',
        //         location: {country: 'Belarus', city: 'Minsk'},
        //         followCheck: true,
        //         avatarUrl: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png'
        //     }
        // ])
    }

    return <div>
        {
            props.users.map(u => <div className={s.container} key={u.id}>
                <div className={s.box1}>
                    <div><img src={u.photos.small != null ? u.photos.small : userAvatar}/></div>
                    <div>{u.followed ? <button className={s.btnU} onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button className={s.btnF} onClick={() => {props.follow(u.id)}}>Follow</button>}</div>
                </div>

                <div className={s.box2}>
                    <h1>{u.name}</h1>
                    <p>{u.status}</p>
                </div>
                <div className={s.box3}>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>

            </div>)
        }
    </div>
};
export default Users;