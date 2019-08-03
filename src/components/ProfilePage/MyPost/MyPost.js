import React from 'react';
import s from './MyPost.module.css';
import NewPost from "../NewPost/NewPost";

const MyPost = () => {

    let messegeData = [
        {id:1, messege: 'Welcome, Social network', likeCounts: 15},
        {id:2, messege: 'How are you?', likeCounts: 3},
        {id:3, messege: 'Great moving in the right direction', likeCounts: 9}
    ]

    return (
        <div className={s.myPost}>
            <form>
                <div><h2>My Post</h2></div>
                <div>
                    <textarea className={s.newPostTextForm} name='newpost' value='my post'></textarea>
                </div>
                <div><input className={s.buttonPost} type='button' value='Send'/></div>
            </form>

            <NewPost message={messegeData[0].messege} likeCounts={messegeData[0].likeCounts}/>
            <NewPost message={messegeData[1].messege} likeCounts={messegeData[1].likeCounts}/>
            <NewPost message={messegeData[2].messege} likeCounts={messegeData[2].likeCounts}/>
        </div>
    );
}

export default MyPost;