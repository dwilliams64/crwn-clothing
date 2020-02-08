import React from 'react';

import './custom-button.styles.scss';

// The children prop is what ever is in between the opening and closing tag of
// our component.

// ohterProps will take in any other props we need for that button. 

// The way this button is written allows it to be re-usable across the entire App and
// can even be used in other applications. Just feed in the props you need when adding
// the component to other areas of the App and this code should handle most situations.
const CustomButton = ({children, ...otherProps}) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
)

export default CustomButton;