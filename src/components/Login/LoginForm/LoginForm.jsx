import React from 'react';
import s from './LoginForm.module.css';
import {createFields} from "../../../utils/formCreator";

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {/*<div>*/}
            {/*<Field placeholder={'Email'} component={'input'} name={'login'}/>*/}
            {createFields('Email', 'input', 'login')}
        {/*</div>*/}
        {/*<div>*/}
            {/*<Field placeholder={'Password'} component={'input'} name={'password'} type={'password'}/>*/}
            {createFields('Password', 'input', 'password', {type: 'password'})}
        {/*</div>*/}
        {/*<div>*/}
            {/*<Field type={'checkbox'} component={'input'} name={'rememberMe'}/> remember me*/}
            {createFields(null, 'input', 'rememberMe', {type: 'checkbox'}, 'remember me')}
        {/*</div>*/}
        {error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Submit</button>
        </div>
    </form>
};


export default LoginForm;