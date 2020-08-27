import React, { useState,FormEvent } from 'react';

import { IFieldScheme } from '../../models/interface/iFieldScheme';
import { SIGN_IN_FORM } from "../../models/form-structure/user";

import DynamicForm from '../dynamic-form/dynamic-form.component';

import './sign-in.style.scss';

const SignIn = () => {
    const [ fields ] = useState<IFieldScheme[]>(SIGN_IN_FORM);

    // const [ userCredentials, setCredentials ] = useState({displayName: '', email: '', password: '', confirmPassword: ''});

    // const handleChange = event => {
    //     const { value, name } = event.target;
    //     setCredentials({...userCredentials, [name]: value });
    // }

    //  const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => ( 
        event.preventDefault()
    );

    return (
        <div className="text-white sign-in">
            <DynamicForm formTitle='Login' formFields={fields} data={null} onSubmit={handleSubmit} buttonText='Submit'/>
        </div>
    );
}

export default SignIn;