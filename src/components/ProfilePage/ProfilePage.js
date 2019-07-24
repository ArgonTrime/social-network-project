import React from 'react';
import s from './ProfilePage.module.css';
import MyPost from "./MyPost/MyPost";
import MainInfo from "./MainInfo/MainInfo";
import NewPost from "./NewPost/NewPost";

const ProfilePage = () => {
    return (
        <div>
            <MainInfo/>
            <MyPost/>
            <NewPost message='Welcome, Social network'/>
            <NewPost message='How are you?'/>
            <NewPost message='Great moving in the right direction'/>
        </div>
    );
}

export default ProfilePage;