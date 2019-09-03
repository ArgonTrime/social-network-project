import React from 'react';
import MainInfo from "./MainInfo/MainInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const ProfilePage = (props) => {
    return (
        <div>
            <MainInfo/>
            <MyPostContainer store={props.store}/>
        </div>
    );
}

export default ProfilePage;