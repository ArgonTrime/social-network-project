import React from 'react';
import s from "../DialogsPage.module.css";
import {Field} from "redux-form";
import Textarea from "../../FormControls/Textarea";
import {required} from "../../../utils/validators/validators";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newMessageBody'
                       placeholder='Enter your message'
                       validate={[required, props.validate]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

export default AddMessageForm;