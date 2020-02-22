import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selector';

import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history }) => (
    <div className="cart-dropdown">
        <div className="cart-items">            
            {   
                cartItems.length ? (      
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )
            }
        </div>

        {/* history.push() Pushes a new entry onto the history stack */}
        <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>    
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// Here we are wrapping two HOC.
// The order in which they are wrapped in does matter.
// connect will run first and return the newer component with the redux.
// Then withRouter will run and return the component with all the Routing.
export default withRouter(connect(mapStateToProps)(CartDropDown));