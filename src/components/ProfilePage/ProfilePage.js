import React from 'react';
import s from './ProfilePage.module.css';
import MyPost from "./MyPost/MyPost";
import MainInfo from "./MainInfo/MainInfo";

const ProfilePage = (props) => {
    return (
        <div>
            <MainInfo/>
            <MyPost profilePosts={props.profilePosts}/>
        </div>
    );
}

export default ProfilePage;