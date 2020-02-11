import React from 'react';
import { Link } from 'react-router-dom';

// Importing auth lib from our firebase setup.
import { auth } from '../../firebase/firebase.utiles';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

// Passing in the state of current user into our Header component. 
const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>

        <div className="optoins">
            <Link to="/shop" className="option">
                SHOP
            </Link>
        
            <Link to="/contact" className="option">
                CONTACT
            </Link>

            {/* Using block of code to determine if sign-in or sign-out should be displayed.
            If currentUser returns an object when passed into our Header component it will evaluate to true and sign-out 
            will be displayed. If currentUser is null then sign-in will be displayed. */}
            {
                currentUser ? (
                    <div 
                        className="option"
                        
                        // We are using an onClick event with an anynomous function to call on
                        // the signOut method that is from our firebase auth lib.
                        // By clicking this the user will be signed out.
                        onClick={() => auth.signOut()}
                    >
                        SIGN OUT
                    </div>
                )
                
                : (
                    // When user is not signed in then we redirect them to the sign-in page.
                    <Link 
                        className="option" 
                        to="/signin"
                    >
                        SIGN IN
                    </Link>
                )
                
            }



        </div>

        

    </div>
)

export default Header;