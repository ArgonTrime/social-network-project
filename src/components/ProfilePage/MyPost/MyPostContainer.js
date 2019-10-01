import React from 'react';
import {addPostProfile, updateNewPostProfile} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        profilePosts: state.profilePage.profilePosts,
        newPostText: state.profilePage.newPostText
    }
};

const MyPostContainer = connect(mapStateToProps, {
    updateNewPostText: updateNewPostProfile,
    addPost: addPostProfile
})(MyPost);
export default MyPostContainer;