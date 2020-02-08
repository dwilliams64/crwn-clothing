import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

// Special React way of importing SVGs into our project.

// The 'as' keyword sets an alies so instead of using ReactComponent in our code we
// use Logo instead. We saw this in the react-router-dom documentation where they replaced
// BrowserRouter with Router.
import { ReactComponent as Logo } from '../../assets/crown.svg';


const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>

        
        <Link to='/shop' className='options'>
            SHOP
        </Link>
    

    
        <Link to='/contact' className='options'>
            CONTACT
        </Link>
        

    </div>
)

export default Header;