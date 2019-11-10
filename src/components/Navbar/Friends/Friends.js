import React from 'react';
import s from './Friends.module.css';
import FriendsList from "./FriendList/FriendList";


const Friends = (props) => {
    let name = props.friend.map(n => <FriendsList name={n.name} key={n.id}/>);
    return (


        <div className={s.friends}>
            <h1>Friends</h1>
            {name}
        </div>
    );
}

export default Friends;