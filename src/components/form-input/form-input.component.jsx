import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, type, handleInputChange, ...otherProps }) => (
    <div className='form-group group'>
        <input className='form-control form-input' type={type} onChange={handleInputChange} {...otherProps} />
        {             
            label ?  
            (
                <label className={'form-input-label'} >
                    {label}
                </label>
            )
            : null
        }
    </div>
);
export default FormInput;