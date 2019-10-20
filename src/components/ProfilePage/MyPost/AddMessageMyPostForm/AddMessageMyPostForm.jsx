import React from 'react';
import {Field} from "redux-form";
import {required} from "../../../../utils/validators/validators";
import Textarea from "../../../FormControls/Textarea";


const AddMessageMyPostForm = (props) => {



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
export default AddMessageMyPostForm;