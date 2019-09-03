import React from 'react';
import {addPostProfileActionCreator, updateNewPostProfileActionCreator} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
    let state = props.store.getState();

    let addPostProfile = () => {
        props.store.dispatch(addPostProfileActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostProfileActionCreator(text));
    };


    return (
        <MyPost updateNewPostText={onPostChange} addPost={addPostProfile} profilePosts={state.profilePage.profilePosts}
                newPostText={state.profilePage.newPostText}/>
    );
};

export default MyPostContainer;