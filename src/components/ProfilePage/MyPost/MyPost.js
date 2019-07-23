import React from 'react';
import s from './MyPost.module.css';

const MyPost = () => {
    return (
        <div className={s.myPost}>
            <form>
                <div><h2>My Post</h2></div>
                <div><textarea className={s.newPostTextForm} name='newpost' value='my post' ></textarea></div>
                <div><input className={s.buttonPost} type='button' value='Send'/></div>
            </form>
        </div>
    );
}

export default MyPost;