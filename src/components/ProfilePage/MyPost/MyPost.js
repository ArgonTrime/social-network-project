import React from 'react';
import s from './MyPost.module.css';
import NewPost from "../NewPost/NewPost";

const MyPost = (props) => {

    let messeges = props.profilePosts.map( m => <NewPost message={m.messege} likeCounts={m.likeCounts}/>);

    return (
        <div className={s.myPost}>
            <form>
                <div><h2>My Post</h2></div>
                <div>
                    <textarea className={s.newPostTextForm} name='newpost'></textarea>
                </div>
                <div><input className={s.buttonPost} type='button' value='Send'/></div>
            </form>

            {messeges}
        </div>
    );
}

export default MyPost;