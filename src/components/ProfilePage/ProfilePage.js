import React from 'react';
import s from './ProfilePage.module.css';
import MyPost from "./MyPost/MyPost";
import MainInfo from "./MainInfo/MainInfo";

const ProfilePage = () => {
    return (
        <div>
            <MainInfo/>
            <MyPost/>
        </div>
    );
}

export default ProfilePage;