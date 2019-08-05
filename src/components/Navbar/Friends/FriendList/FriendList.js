import React from 'react';
import s from './FriendList.module.css';


const FriendsList = (props) => {
    return (

            <div>
                <img src='https://www.shareicon.net/download/2017/02/05/878221_user_512x512.png'/>
                <div>{props.name}</div>

            </div>
    );
}

export default FriendsList;