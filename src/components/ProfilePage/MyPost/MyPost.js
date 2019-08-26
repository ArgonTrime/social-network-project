import React from 'react';
import s from './MyPost.module.css';
import NewPost from "../NewPost/NewPost";
import {addPostProfileActionCreator, updateNewPostProfileActionCreator} from "../../../Redux/Store";

const MyPost = (props) => {

    let messeges = props.profilePosts.map( m => <NewPost message={m.messege} likeCounts={m.likeCounts}/>);

    let newPostElement = React.createRef();
    let addPostProfile = () => {
        let action = addPostProfileActionCreator();
        props.dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostProfileActionCreator(text);
        props.dispatch(action);
    }


    return (
        <div className={s.myPost}>
            <form>
                <div><h2>My Post</h2></div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} className={s.newPostTextForm} value={props.newPostText}/>
                </div>
                <div><input onClick={addPostProfile} className={s.buttonPost} type='button' value='Add'/></div>
            </form>

            {messeges}
        </div>
    );
}

export default MyPost;