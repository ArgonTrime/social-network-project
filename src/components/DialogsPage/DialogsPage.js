import React from 'react';
import s from './DialogsPage.module.css';
import Dialog from "./Dialog/Dialog";
import Messege from "./Messege/Messege";
import {addNewDialogMessege, updateNewDialogMessege} from "../../Redux/dialogsPageReducer";
import {Redirect} from "react-router-dom";

const DialogsPage = (props) => {
    let state = props.dialogPage;

    let dialogs = state.dialogList.map(d => <Dialog name={d.name} id={d.id}/>);
    let messeges = state.dialogMesseges.map(m => <Messege messege={m.messege}/>);

    let newPostElement = React.createRef();
    let addNewPost = () => {
        props.addNewDialogMessege();
    };

    let addMessegeDialog = () => {
        let text = newPostElement.current.value;
        props.updateNewDialogMessege(text);

    };

    if(!props.isAuth) return <Redirect to={'/login'}/>

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
                               value={state.newDialogMessege}/></div>
                <div><input onClick={addNewPost} className={s.buttonPost} type='button' value='Add'/></div>
            </div>
        </div>
    );
};

export default DialogsPage;