import React from 'react';
import './../App.css';
import MyPost from "./MyPost";
import MainInfo from "./MainInfo";
import NewPost from "./NewPost";

const ProfilePage = () => {
    return (
        <div className='maincontent'>
            <MainInfo/>
            <MyPost/>
            <NewPost/>
            <NewPost/>
            <NewPost/>
        </div>
    );
}

export default ProfilePage;