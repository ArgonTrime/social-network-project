import s from './Messege.module.css';
import React from 'react';

const Messege = (props) => {
    return <div className={s.messege}>{props.messege}</div>
}

export default Messege;