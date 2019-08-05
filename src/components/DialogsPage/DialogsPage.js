import React from 'react';
import s from './DialogsPage.module.css';
import Dialog from "./Dialog/Dialog";
import Messege from "./Messege/Messege";

const DialogsPage = (props) => {

    let dialogs = props.state.dialogList.map( d => <Dialog name={d.name} id={d.id}/>);
    let messeges = props.state.dialogMesseges.map( m => <Messege messege={m.messege}/>);

    return (
        <div className={s.dialogPage}>
            <div className={s.dialogs}>
                <h1>DIALOGS</h1>
            </div>
            <div className={s.dialogsListLeft}>
                {dialogs}
            </div>
            <div className={s.messegeRight}>
                {messeges}
            </div>
        </div>
    );
}

export default DialogsPage;