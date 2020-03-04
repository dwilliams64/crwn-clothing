// We are also importing css from the styled-components lib.

import styled, { css } from 'styled-components';

// Since we need to style a Link component, we must import it the component as well.

import { Link } from 'react-router-dom';

// By importing css from styled-components we can set a list of styles
// that we can share in multiple components.

// This helps prevent repeated code.

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

// If we wish to style a react component we must first import the 
// component.

// Next we pass in the component as an argument to styled.

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

// OptionLink and OptionDiv will share the same style. 

// In order to prevent duplicate code we defined a set of common
// styles using css from the styled-components lib.

// To use the styles we defined inside of css 
// we use string interpulation and call on the variable
// where we are storing our common css styles.

/*

${OptionContainerStyles} will place:

height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;

inside of our styled components that contain
${OptionContainerStyles}

*/
export const OptionLink = styled(Link)`    
    ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;