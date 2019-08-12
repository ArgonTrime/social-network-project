import React from 'react';
import s from './MyPost.module.css';
import NewPost from "../NewPost/NewPost";

const MyPost = (props) => {

    let messeges = props.profilePosts.map( m => <NewPost message={m.messege} likeCounts={m.likeCounts}/>);

    let newPostElement = React.createRef();
    let addPostProfile = () => {
        props.addPostProfile();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostProfile(text);
    }


    return (
        <div className={s.myPost}>
            <form>
                <div><h2>My Post</h2></div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} className={s.newPostTextForm} value={props.newPostText}></textarea>
                </div>
                <div><input onClick={addPostProfile} className={s.buttonPost} type='button' value='Add'/></div>
            </form>

            {messeges}
        </div>
    );
}

export default MyPost;