import React from 'react';

import './form-checkbox.styles.scss';

const FormCheckBox = ({ label, handleInputChange, ...otherProps }) => (
    <label>
        <input type='checkbox' onChange={handleInputChange} {...otherProps} />
        <span>{label}</span>
    </label>
)

export default FormCheckBox;