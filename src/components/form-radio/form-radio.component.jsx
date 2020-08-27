import React from 'react';

import './form-radio.styles.scss';

const FormRadio = ({ label, handleInputChange, ...otherProps }) => (
    <div className='form-radio'>
        <label>
            <input onChange={handleInputChange} {...otherProps} />&nbsp;&nbsp;
            {label}
        </label>
    </div>
)

export default FormRadio;