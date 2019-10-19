import React from 'react';
import s from './DialogsPage.module.css';
import Dialog from "./Dialog/Dialog";
import Messege from "./Messege/Messege";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {reduxForm} from "redux-form";

const DialogsPage = (props) => {
    let state = props.dialogPage;

    let dialogs = state.dialogList.map(d => <Dialog name={d.name} id={d.id}/>);
    let messeges = state.dialogMesseges.map(m => <Messege messege={m.messege}/>);


    let addNewMessage = (values) => {
        props.addNewDialogMessege(values.newMessageBody);
    };

    return (
        <div className={s.dialogPage}>
            <div className={s.dialogs}>
                <h1>DIALOGS</h1>
            </div>
            <div className={s.dialogsListLeft}>
                {dialogs}
            </div>
            <div className={s.messegeRight}>
                <div>
                    {messeges}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
export default DialogsPage;