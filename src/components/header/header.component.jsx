import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utiles';
import { connect } from 'react-redux';

// Imports createStructuredSelector
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selector';

import { selectCartHidden } from '../../redux/cart/cart.selector';

const Header = ({currentUser, hidden}) => (
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

            {
                currentUser ? (
                    <div 
                        className="option"
                        onClick={() => auth.signOut()}
                    >
                        SIGN OUT
                    </div>
                )
                
                : (
                    <Link 
                        className="option" 
                        to="/signin"
                    >
                        SIGN IN
                    </Link>
                )
                
            } 

            
        </div>
        <CartIcon />

        {
            hidden ? <CartDropDown /> : null
        }  
              
    </div>
)


// createStructuredSelector is a method from the reselect lib.
// It passes down our top level state to multiple selectors.
// This comes in handy if you have a long list of selectors.
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);