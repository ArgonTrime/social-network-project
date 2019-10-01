import React from 'react';
import MainInfo from "./MainInfo/MainInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const ProfilePage = (props) => {
    return (
        <div>
            <MainInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    );
};

export default ProfilePage;