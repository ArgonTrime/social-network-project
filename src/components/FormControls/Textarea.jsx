import React from 'react';
import s from './Textarea.module.css';

const Textarea = ({input, meta, ...props}) => {

    const checkError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (checkError ? s.error : '')}>
            <div><textarea {...input}{...props}/></div>
            {checkError && <span>{meta.error}</span>}
        </div>

    )
};
export default Textarea;