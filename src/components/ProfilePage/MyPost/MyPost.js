import React from 'react';
import s from './MyPost.module.css';
import NewPost from "../NewPost/NewPost";

const MyPost = (props) => {

    let messeges = props.profilePosts.map( m => <NewPost message={m.messege} likeCounts={m.likeCounts}/>);

    let newPostElement = React.createRef();
    let addNewPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }


    return (
        <div className={s.myPost}>
            <form>
                <div><h2>My Post</h2></div>
                <div>
                    <textarea ref={newPostElement} className={s.newPostTextForm} name='newpost'></textarea>
                </div>
                <div><input onClick={addNewPost} className={s.buttonPost} type='button' value='Add'/></div>
            </form>

            {messeges}
        </div>
    );
}

export default MyPost;