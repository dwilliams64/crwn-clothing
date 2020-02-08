import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />

        {/* This will show a label if there is a label for the FormInput component. 
        Remember we are trying to make re-usable components. We are not sure if we will 
        need a label or not so the following will handle the creation of a label when a 
        label is needed. */}

        {
            label ? (
            
            <label
            // ${otherProps.value.length ? 'shrink' : ''} handles the label shrinking animation when a 
            // user clicks inside of the input box. This is just a way to add and remove a class name 
            // dynamically based on user interaction.
                
                className={`
                
                    ${otherProps.value.length ? 'shrink' : ''}
                
                     form-input-label   
                `}            
            >
                {label}
            </label>
            
            ) : null
        }
    </div>  
) 

export default FormInput;