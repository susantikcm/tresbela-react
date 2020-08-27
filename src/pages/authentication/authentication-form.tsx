import React, { FormEvent } from "react";
import { withRouter } from "react-router-dom";

import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

// import DynamicForm from "../../components/dynamic-form/dynamic-form.component";

// import { IFieldScheme } from '../../models/interface/iFieldScheme';
// import { ISignUpForm, ISignInForm } from '../../models/interface/iFormScheme';

// import { registerUser, signInUser } from "../../store/config/redux-token-auth-config";

const AuthenticationForm = (props: any) => {
  // const [formData, setFormData] = useState({});

  const {formTitle, buttonText, formFields} = props;

  const handleSubmit = (event : FormEvent<HTMLFormElement>) => ( 
    event.preventDefault()

    // action(formData)
    //   .then(() => {
    //     props.history.push("/");
    //   })
    //   .catch((error: ErrorEvent) => {
    //     console.log(error);
    //   });
  );
  console.log(formTitle);

  return ( 
    <div>
    {
        formTitle && formTitle === 'SignIn' ? <SignIn /> : <SignUp />
    }
    </div>
  )
};

export default withRouter(AuthenticationForm);
