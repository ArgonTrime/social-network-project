import React from 'react';
import s from './DialogsPage.module.css';
import Dialog from "./Dialog/Dialog";
import Messege from "./Messege/Messege";
import {addNewDialogMessege, updateNewDialogMessege} from "../../Redux/Store";

const DialogsPage = (props) => {

    let dialogs = props.state.dialogList.map(d => <Dialog name={d.name} id={d.id}/>);
    let messeges = props.state.dialogMesseges.map(m => <Messege messege={m.messege}/>);

    let newPostElement = React.createRef();
    let addNewPost = () => {
        let action = addNewDialogMessege();
        props.dispatch(action);
    };

    let addMessegeDialog = () => {
        let text = newPostElement.current.value;
        let action = updateNewDialogMessege(text);
        props.dispatch(action);
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
                <div><textarea onChange={addMessegeDialog} ref={newPostElement} className={s.newPostTextForm}
                               value={props.state.newDialogMessege}/></div>
                <div><input onClick={addNewPost} className={s.buttonPost} type='button' value='Add'/></div>
            </div>
        </div>
    );
};

export default DialogsPage;