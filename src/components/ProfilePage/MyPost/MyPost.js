import React from 'react';
import s from './MyPost.module.css';
import NewPost from "../NewPost/NewPost";

const MyPost = () => {

    let messegeData = [
        {id:1, messege: 'Welcome, Social network', likeCounts: 15},
        {id:2, messege: 'How are you?', likeCounts: 3},
        {id:3, messege: 'Great moving in the right direction', likeCounts: 9},
        {id:4, messege: 'Add messege map, good!', likeCounts: 4}
    ]

    let messeges = messegeData.map( m => <NewPost message={m.messege} likeCounts={m.likeCounts}/>);

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