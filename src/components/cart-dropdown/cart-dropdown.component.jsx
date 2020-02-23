import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { selectCartItems } from '../../redux/cart/cart.selector';

import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => {

    // If we look at the console we can see that we have access to the dispatch
    // function as prop of this component.

    console.log(dispatch)
    return (
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

        <CustomButton onClick={() => {
            history.push('/checkout');
            
            // Knowing this we can directly pass in our toggleCartHidden action creator
            // into our component using the dispatch function directly in our component.
            dispatch(toggleCartHidden());

            // By doing this when our user clicks on go to cart and they are redirected to the
            // checkout page our toggleCartHidden() action creator is fired and the cart will
            // be hidden.

            // This setup of directly using dispatch inside of the component is good for when
            // you just need to use dispatch once for something small like this.
        }}
        >GO TO CHECKOUT</CustomButton>
    </div>    
)};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


// If we do not supply a second argument (mapDispatchToProps) into connnect() then the dispatch
// function is automatically passed into our component as a prop.
export default withRouter(connect(mapStateToProps)(CartDropDown));