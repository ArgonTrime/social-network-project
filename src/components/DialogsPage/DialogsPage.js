import React from 'react';
import s from './DialogsPage.module.css';
import Dialog from "./Dialog/Dialog";
import Messege from "./Messege/Messege";

const DialogsPage = () => {

    let dialogData = [
        {id:1, name: 'Ihar'},
        {id:2, name: 'Julia'},
        {id:3, name: 'Alex'},
        {id:4, name: 'Sasha'},
        {id:5, name: 'Artem'}
    ]
    let messegeData = [
        {id:1, messege: 'How a you?'},
        {id:2, messege: 'Grate!'},
        {id:3, messege: 'You upgrade React skill?'}
    ]

    let dialogs = dialogData.map( d => <Dialog name={d.name} id={d.id}/>);
    let messeges = messegeData.map( m => <Messege messege={m.messege}/>);

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