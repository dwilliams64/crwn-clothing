import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utiles';
import { connect } from 'react-redux';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';

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
        
        {/* Hidding and showing of our CartDropDown menu. */}
        {
            hidden ? <CartDropDown /> : null
        }  
              
    </div>
)

// {user: { currentUser }, cart: { hidden }} is an example of a more advanced way of desturturing.

// Our Root Reducer object (state) has nested objects. This syntax destructures those nested objects.

// state/Root Reducer object looks like:

/*

state = {
    user: {
        currentUser: currentUser values
    },

    cart: {
        hidden: hidden values
    }    
}

*/

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({

    // Since we just need the values pulled out of our master state/Root Reducer
    // we can just use currentUser and hidden. Now these values can be mapped to
    // props inside of this component (header)
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);