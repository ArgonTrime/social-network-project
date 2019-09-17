import React from 'react';
import {addPostProfileActionCreator, updateNewPostProfileActionCreator} from "../../../Redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {addNewDialogMessege, updateNewDialogMessege} from "../../../Redux/dialogsPageReducer";

// const MyPostContainer = (props) => {
//     let state = props.store.getState();
//
//     let addPostProfile = () => {
//         props.store.dispatch(addPostProfileActionCreator());
//     };
//
//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostProfileActionCreator(text));
//     };
//
//
//     return (
//         <MyPost updateNewPostText={onPostChange} addPost={addPostProfile} profilePosts={state.profilePage.profilePosts}
//                 newPostText={state.profilePage.newPostText}/>
//     );
// };

let mapStateToProps = (state) => {
    return {
        profilePosts: state.profilePage.profilePosts,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostProfileActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostProfileActionCreator());
        }
    }
};
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;