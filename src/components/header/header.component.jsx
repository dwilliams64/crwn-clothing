import React from 'react';
import { auth } from '../../firebase/firebase.utiles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
        HeaderContainer, 
        LogoContainer, 
        OptionsContainer, 
        OptionLink, 
        OptionDiv
    } from './header.styles.jsx';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selector';

import { selectCartHidden } from '../../redux/cart/cart.selector';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
        
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>

            {
                currentUser ? (
                    <OptionDiv onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionDiv>
                )
                
                : (
                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
                )
                
            }            
        </OptionsContainer>

        <CartIcon />

        {
            hidden ? <CartDropDown /> : null
        } 

    </HeaderContainer>          
    
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);