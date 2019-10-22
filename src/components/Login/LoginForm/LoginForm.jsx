import React from 'react';
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
        <div>
            <button>Submit</button>
        </div>
    </form>
};


export default LoginForm;