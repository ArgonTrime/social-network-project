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
            <NewPost message='Welcome, Social network' likeCounts='5'/>
            <NewPost message='How are you?' likeCounts='1'/>
            <NewPost message='Great moving in the right direction' likeCounts='13'/>
        </div>
    );
}

export default ProfilePage;