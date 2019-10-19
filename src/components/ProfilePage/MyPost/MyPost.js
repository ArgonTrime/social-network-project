import React from 'react';
import s from './MyPost.module.css';
import NewPost from "../NewPost/NewPost";
import {reduxForm} from "redux-form";
import AddMessageMyPostForm from "./AddMessageMyPostForm/AddMessageMyPostForm";



const MyPost = (props) => {
    debugger;
    let messeges = props.profilePosts.map( m => <NewPost message={m.messege} likeCounts={m.likeCounts}/>);

    let addNewMessage = (values) => {
        props.addPostProfile(values.newMessageBody);
    };


    return (
        <div className={s.myPost}>
            <h2>My Post</h2>
            <AddMessageMyPostFormRedux onSubmit={addNewMessage}/>
            {messeges}
        </div>
    );
};
const AddMessageMyPostFormRedux = reduxForm({form: 'addMessageProfile'})(AddMessageMyPostForm);
export default MyPost;