import React from 'react';

import DynamicForm from '../../components/dynamic-form/dynamic-form.component';

class Subscriptions extends React.Component {
    constructor() {
      super();
  
      this.state = {
        formFields: [
        {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            required: true
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            required: true
        },
        {
            name: 'dob',
            label: 'Date of Birth',
            type: 'Date',
            required: true
        },
        {
            name: 'gender',
            label: 'Gender',
            type: 'dropdown',
            options: ['Female, Male'],
            required: false
        },
        {
            name: 'contactType',
            label: 'Contact Type',
            type: 'dropdown',
            options: ['Work', 'home', 'Mobile'],
            required: false
        },
        {
            name: 'contactNo',
            label: 'Contact No.',
            type: 'text',
            required: false
        },
        {
            name: 'guardionConsent',
            label: 'Guardion Consent',
            value: false,
            type: 'checkbox',
            required: false
        },
        {
            name: 'guardionName',
            label: 'Guardion Name',
            type: 'text',
            required: false
        },
        {
            name: 'guardionNo',
            label: 'Guardion No.',
            type: 'text',
            required: false
        }],
        formData: {
          name: "John Foo",
          dob: "1990-01-01",
          gender: 1,
          contact: [
            {
              type: "mobile",
              value: "0400123123"
            },
            {
              type: "home",
              value: "610000000"
            }
          ],
          guardian: 
          {
            name: "Jane Foo",
            contact: "0400123123"
          }
        }
      };
    }

    render() {
      const { formFields } = this.state;
      // console.log(formFields);
      return (
            <div className='dynamic-page'>
                <h1 style={{marginTop:'80px'}}>Subscriptions Preferences</h1>
                <h6>(Dynamic Page)</h6>
                <DynamicForm formFields={formFields} />
            </div>
        );
    }
}  
export default Subscriptions;
