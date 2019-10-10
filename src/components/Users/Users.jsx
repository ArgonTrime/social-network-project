import React from 'react';
import s from './Users.module.css';
import userAvatar from '../../image/user.png';
import {NavLink} from "react-router-dom";
import {componentsAPI} from "../../api/api";

let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <button className={props.currentPage === p ? s.btnU : s.btnF}
                               onClick={() => {
                                   props.onPageChanged(p)
                               }}>{p}</button>
            })}
        </div>
        {
            props.users.map(u => <div className={s.container} key={u.id}>
                <div className={s.box1}>
                    <div>
                        <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : userAvatar}/></NavLink>
                    </div>
                    <div>{u.followed
                        ? <button disabled={props.followingInProgres.some(id => id === u.id)} className={s.btnU} onClick={() => {
                            props.unfollow(u.id);
                            // props.toggleIsFollowingProgres(true, u.id);
                            // componentsAPI.unfollow(u.id).then(data => {
                            //     if (data.resultCode === 0) {
                            //         props.unfollow(u.id)
                            //     }
                            //     props.toggleIsFollowingProgres(false, u.id);
                            // });
                           }}>Unfollow</button>


                        : <button disabled={props.followingInProgres.some(id => id === u.id)} className={s.btnF} onClick={() => {
                           props.follow(u.id);
                            // props.toggleIsFollowingProgres(true, u.id);
                            // componentsAPI.follow(u.id).then(data => {
                            //     if (data.resultCode === 0) {
                            //         props.follow(u.id)
                            //     }
                            //     props.toggleIsFollowingProgres(false, u.id);
                            // });
                            }}>Follow</button>}
                    </div>
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