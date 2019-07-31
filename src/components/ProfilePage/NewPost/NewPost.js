import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
    return (
        <div className={s.newPost}>
            <img src='https://cdn.pixabay.com/photo/2012/04/12/10/49/speech-29435_640.png'/>
            <div>
                {props.message}
            </div>
            <div>
                <button>Like</button>
                <span>{props.likeCounts}</span>
            </div>
        </div>
    );
}

export default NewPost;