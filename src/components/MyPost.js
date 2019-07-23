import React from 'react';
import './../App.css';

const MyPost = () => {
    return (
        <div className='myPost'>
            <form>
                <div><h2>My Post</h2></div>
                <div><textarea className='newPostTextForm' name='newpost' value='my post' ></textarea></div>
                <div><input className='buttonPost' type='button' value='Send'/></div>
            </form>
        </div>
    );
}

export default MyPost;