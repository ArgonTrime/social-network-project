import React from 'react';
import s from './ProfilePage.module.css';
import MyPost from "./MyPost/MyPost";
import MainInfo from "./MainInfo/MainInfo";

const ProfilePage = (props) => {
    return (
        <div>
            <MainInfo/>
            <MyPost profilePosts={props.profilePage.profilePosts}
                    newPostText={props.profilePage.newPostText}
                    addPostProfile={props.addPostProfile}
                    updateNewPostProfile={props.updateNewPostProfile}/>
        </div>
    );
}

export default ProfilePage;