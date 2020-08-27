import React, { useState } from 'react';

import DynamicForm from '../../components/dynamic-form/dynamic-form.component';

import { USER_FORM } from '../../models/form-structure/user';

const SignUp = () => {
  const [formScheme] = useState(USER_FORM);

  return (
    <div className='dynamic-page'>
      <h1>Dynamic Sign Up Page</h1> <br />
      <DynamicForm formScheme={formScheme} alignself='center' />
    </div>
  );
}

export default SignUp;
