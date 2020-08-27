import { IFieldScheme } from "../interface/iFieldScheme";

const fields = {
    firstName: { name: "firstName", type: "text", label: "First Name", placeholder: 'Jack', required: true },
    lastName: { name: "lastName", type: "text", label: "Last Name", placeholder: 'Doe', required: true },
    email: { name: "email", type: "email", label: "Email", placeholder: 'jack@mail.com', required: true },
    addressLine: { name: "addressLine", type: "text", label: "Address Line", placeholder: 'Awesome str 9', required: true },
    postalCode: { name: "postalCode", type: "text", label: "Postal Code", placeholder: '12345', required: true },
    city: { name: "city", type: "text", label: "City", placeholder: 'Gothenburg', required: true },
    state: { name: "state", type: "text", label: "State", placeholder: 'Gotaland', required: true },
    dob: { name: "dob", type: "date", label: "Date of Birth", required: true },
    password: { name: "password", type: "password", label: "Password", required: true },
    passwordConfirmation: { name: "passwordConfirmation", type: "password", label: "Password Confirmation", required: true },

    // { name: 'dob', type: 'Date', label: 'Date of Birth', required: false },
    // { name: 'gender', type: 'dropdown', label: 'Gender', required: false, options: ['Female', 'Male'] }, 
    // { name: 'contactType', type: 'dropdown', label: 'Contact Type', required: false, options: ['Work', 'home', 'Mobile'] },
    // { name: 'contactNo', type: 'text', label: 'Contact No.', required: false },
    // { name: 'guardianConsent', type: 'checkbox', label: 'Guardian Consent', required: false },
};

export const SIGN_UP_FORM: IFieldScheme[] = [
    fields.email,
    fields.password,
    fields.passwordConfirmation,
    fields.firstName,
    fields.lastName,
    // fields.addressLine,
    // fields.postalCode,
    // fields.state,
    fields.dob,
];

export const SIGN_IN_FORM: IFieldScheme[] = [
    fields.email, 
    fields.password
];