import React from 'react';
import {Field} from "redux-form";

const AddMessageMyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
                {/*<textarea onChange={onPostChange} ref={newPostElement} className={s.newPostTextForm} value={props.newPostText}/>*/}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};
export default AddMessageMyPostForm;