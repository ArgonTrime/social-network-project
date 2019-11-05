import React from 'react';
import s from './MyPost.module.css';
import NewPost from "../NewPost/NewPost";
import {reduxForm} from "redux-form";
import AddMessageMyPostForm from "./AddMessageMyPostForm/AddMessageMyPostForm";
import {maxLengthCreator} from "../../../utils/validators/validators";



const MyPost = React.memo(props => {
    let messeges = props.profilePosts.map( m => <NewPost message={m.messege} likeCounts={m.likeCounts} key={m.id}/>);

    let addNewMessage = (values) => {
        props.addPostProfile(values.newMessageBody);
    };

    const maxLength10 = maxLengthCreator(10);

    return (
        <div className={s.myPost}>
            <h2>My Post</h2>
            <AddMessageMyPostFormRedux onSubmit={addNewMessage} validate={maxLength10}/>
            {messeges}
        </div>
    );
});
const AddMessageMyPostFormRedux = reduxForm({form: 'addMessageProfile'})(AddMessageMyPostForm);
export default MyPost;