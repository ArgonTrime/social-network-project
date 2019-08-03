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

    return (
        <div className={s.dialogPage}>
            <div className={s.dialogs}>
                <h1>DIALOGS</h1>
            </div>
            <div className={s.dialogsListLeft}>
                <Dialog name={dialogData[0].name} id={dialogData[0].id}/>
                <Dialog name={dialogData[1].name} id={dialogData[1].id}/>
                <Dialog name={dialogData[2].name} id={dialogData[2].id}/>
                <Dialog name={dialogData[3].name} id={dialogData[3].id}/>
                <Dialog name={dialogData[4].name} id={dialogData[4].id}/>
            </div>
            <div className={s.messegeRight}>
                <Messege messege={messegeData[0].messege}/>
                <Messege messege={messegeData[1].messege}/>
                <Messege messege={messegeData[2].messege}/>
            </div>
        </div>
    );
}

export default DialogsPage;