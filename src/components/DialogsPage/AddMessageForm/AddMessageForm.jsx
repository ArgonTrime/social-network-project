import React from 'react';
import s from "../DialogsPage.module.css";
import {Field} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
                {/*<textarea onChange={addMessegeDialog} ref={newPostElement} className={s.newPostTextForm}*/}
                {/*           value={state.newDialogMessege}/>*/}
            </div>
            <div>
                <button>Send</button>
                {/*<input onClick={addNewPost} className={s.buttonPost} type='button' value='Add'/>*/}
            </div>
        </form>
    )
};

export default AddMessageForm;