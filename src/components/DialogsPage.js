import React from 'react';
import './../cssComponents/DialogsPage.css';

const DialogsPage = () => {
    return (
        <div className='dialogPage'>
            <div className='dialogs'>
                <h1>DIALOGS</h1>
            </div>
            <div className='messegeListLeft'>
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
            <div className='messegeRight'>
                <div className='dialogMessege'>messege user</div>
            </div>
        </div>
    );
}

export default DialogsPage;