import React from 'react';
import s from './DialogsPage.module.css';

const DialogsPage = () => {
    return (
        <div className={s.dialogPage}>
            <div className={s.dialogs}>
                <h1>DIALOGS</h1>
            </div>
            <div className={s.messegeListLeft}>
                <ul>
                    <li>Andrey</li>
                    <li>Dmitry</li>
                    <li>Sasha</li>
                    <li>Sveta</li>
                    <li>Ihar</li>
                    <li>Julia</li>
                    <li>Alexey</li>
                </ul>
            </div>
            <div className={s.messegeRight}>
                <div className={s.dialogMessege}>messege user</div>
            </div>
        </div>
    );
}

export default DialogsPage;