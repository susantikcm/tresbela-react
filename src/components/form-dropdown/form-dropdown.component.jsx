import React from 'react';

import './form-dropdown.styles.scss';

const FormDropdown = ({ label, options, defaultValue, required, handleInputChange, ...otherProps }) => {
    return(
    <div className='form-gorup group'>
        <label className='form-input-label'>{label}</label>
        <select className='select' onChange={handleInputChange} {...otherProps}> 
            <option>{defaultValue ? defaultValue : 'Select options...'}</option>
            {
                options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))
            }
        </select>
    </div>
);}

export default FormDropdown; 