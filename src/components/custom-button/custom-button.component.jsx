import React from 'react';

import './custom-button.styles.scss';

// isGoogleSignIn will have a value of true when passed into our CustomButton component from the custom button
// on the SignIn component.
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    // If isGoogleSignIn is present then the class of google-sign-in is added on.

    // If isGoogleSignIn isn't present then an empty string is returned and our custom class of google-sign-in
    // will not be added. 
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {console.log(isGoogleSignIn)}
        {children}
    </button>
)

export default CustomButton;