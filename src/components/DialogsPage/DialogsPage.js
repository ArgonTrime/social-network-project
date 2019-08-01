import React from 'react';
import s from './DialogsPage.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Messege = (props) => {
    return <div className={s.messege}>{props.messege}</div>
}

const DialogsPage = () => {
    return (
        <div className={s.dialogPage}>
            <div className={s.dialogs}>
                <h1>DIALOGS</h1>
            </div>
            <div className={s.dialogsListLeft}>
                <Dialog name='Ihar' id='1'/>
                <Dialog name='Julia' id='2'/>
                <Dialog name='Dmitry' id='3'/>
                <Dialog name='Alexey' id='4'/>
                <Dialog name='Sasha' id='5'/>
                <Dialog name='Artem' id='6'/>
            </div>
            <div className={s.messegeRight}>
                <Messege messege='Messege user'/>
                <Messege messege='Messege user'/>
                <Messege messege='Messege user'/>
            </div>
        </div>
    );
}

export default DialogsPage;