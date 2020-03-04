import React from 'react';
import Directory from '../../components/directory/directory.component';

// Importing our styled component from homepage.styles.jsx
import { HomePageContainer } from './homepage.styles';

const Homepage = () => (

    // This component will render out a div with our styles we 
    // defined inside of homepage.styles.jsx.
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);

export default Homepage;