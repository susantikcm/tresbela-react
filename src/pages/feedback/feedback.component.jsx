import React from 'react';

import DynamicForm from '../../components/dynamic-form/dynamic-form.component';

class Feedback extends React.Component {
    constructor() {
      super();
  
      this.state = {
        formFields: [
        {
            name: '1',
            label: 'I am not interested in your products',
            type: 'radio',
            required: true
        },
        {
            name: '2',
            label: 'You send emails too frequently',
            type: 'radio',
            required: true
        },
        {
            name: '3',
            label: 'I am not interested in your newsletter content',
            type: 'radio',
            required: true
        },
        {
            name: '4',
            label: 'I did not sign up for emails',
            type: 'radio',
            required: false
        },
        {
            name: '5',
            label: 'Other',
            type: 'radio',
            options: ['Work', 'home', 'Mobile'],
            required: false
        }],
      };
    }

    render() {
      const { formFields } = this.state;
      // console.log(formFields);
      return (
            <div className='dynamic-page'>
                <h1 style={{marginTop:'80px'}}>Subscriptions Preferences</h1>
                <h6>(Dynamic Page)</h6> <br/><br/>
                <h2>WE'LL TRULY MISS YOU <span role='img' aria-label='sad'>😔</span></h2>
                <p>Just one more step - please let us know why you would like to unsubscribe:</p>

                <DynamicForm formFields={formFields} submitValue='UNSUBSCRIBE' alignself='center' />
                <br />
                <p>To re-subscribe, please go to www.alectrone.com and login to change your subscriptions preferences</p>
            </div>
        );
    }
}  
export default Feedback;
