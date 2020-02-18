import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utiles';

// Connect is a higher order component (HOC) that lets us modify our component to have 
// access to redux. 
import { connect } from 'react-redux';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

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
    </div>
)

// Accesses Root Reducer.

// The argument state is the Root Reducer

// state (Root Reducer).user (user property inside of Root Reducer).currentUser (Property that is returned from user-reducer and now lives inside of the user property inside of the Root Reducer)

// mapStateToProps is the standard name when writing redux code. This function could have been named anything.
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

// connect() takes two arguments.

// One of the arguments is optional and we will cover that in next lesson.

// Both arguments are functions.

// Currently we are only passing in one argument.

// 1st argument will be a function that allows us to access the Root reducer.

// connect() will run using the argument mapStateToProps. Once this runs connect
// will run again, but this time using our component
// in which we want to pass state to as the argument. In this case we are passing in our
// Header component since we want the user state inside of this component. 

// Following concept is an example of currying.
export default connect(mapStateToProps)(Header);