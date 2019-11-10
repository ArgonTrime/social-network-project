import React from 'react';
import s from './FriendList.module.css';
import user from '../../../../image/user.png';


const FriendsList = (props) => {
    return (

            <div className={s.friendList}>
                <img src={user}/>
                <div>{props.name}</div>

            </div>
    );
};

export default FriendsList;