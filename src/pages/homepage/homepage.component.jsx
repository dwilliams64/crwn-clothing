import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

// We divided our components into re usable components which now live in the 
// components folder and pages which are components used to represent a page
// that will not be reused inside of the pages folder.

const Homepage = () => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default Homepage;