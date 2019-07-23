import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
    return (
        <div className={s.newPost}>
            <img src='https://cdn.pixabay.com/photo/2012/04/12/10/49/speech-29435_640.png'/>
            <div>
                {props.message}
            </div>
            <button>Like</button>
        </div>
    );
}

export default NewPost;