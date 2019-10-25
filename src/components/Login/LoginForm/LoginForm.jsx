import React from 'react';
import s from './LoginForm.module.css';
import {Field} from "redux-form";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Email'} component={'input'} name={'login'}/>
        </div>
        <div>
            <Field placeholder={'Password'} component={'input'} name={'password'} type={'password'}/>
        </div>
        <div>
            <Field type={'checkbox'} component={'input'} name={'rememberMe'}/> remember me
        </div>
        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Submit</button>
        </div>
    </form>
};


export default LoginForm;