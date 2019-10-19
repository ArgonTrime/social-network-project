import React from 'react';
import {addPostProfile} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        profilePosts: state.profilePage.profilePosts
    }
};


export default compose(
    connect(mapStateToProps, {addPostProfile})
)(MyPost);