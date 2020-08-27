import React, { useState,FormEvent } from 'react';

import { IFieldScheme } from '../../models/interface/iFieldScheme';
import { SIGN_UP_FORM } from "../../models/form-structure/user";

import DynamicForm from '../dynamic-form/dynamic-form.component';

import './sign-up.style.scss';

const SignUp = () => {
    const [ fields ] = useState<IFieldScheme[]>(SIGN_UP_FORM);

    // const [ userCredentials, setCredentials ] = useState({displayName: '', email: '', password: '', confirmPassword: ''});

    // const handleChange = event => {
    //     const { value, name } = event.target;
    //     setCredentials({...userCredentials, [name]: value });
    // }

    //  const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => ( 
        event.preventDefault()

    //     if(password !== confirmPassword) {
    //         alert("passwords don't match");
    //         return;
    //     }

    //     try {
    //         //create user based on email and password entered
    //         //if succesful user will be signed in and it returns userAuth object
    //         //the useAuth object in on the key user, that's why we destructure it 
    //         const { user } = await auth.createUserWithEmailAndPassword(email, password);

    //         //store user to Firestore 
    //         createUserProfileDocument(user, { displayName });

    //         //clear state
    //         setCredentials({
    //             displayName: '',
    //             email: '',
    //             password: '',
    //             confirmPassword: ''
    //         });
    //     }
    //     catch (error) {
    //         console.error(error);
    //     }
    );

    return (
        <div className="text-white">
            <DynamicForm formTitle='Register' formFields={fields} data={null} onSubmit={handleSubmit} buttonText='Submit'/>
        </div>
    );
}

export default SignUp;