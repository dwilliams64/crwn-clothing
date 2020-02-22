import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

// We destructure our cartItems array off of the props object. 
// Alternate syntax would be CartDropDown = (props.cartItems)
const CartDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {   
                // Looping through our cartItems array and mapping the
                // respective props to the CartItem component.
                cartItems.map(cartItem => (

                    // On the item prop we are passing in the object
                    // that represnts a cartItem.
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>    
);

// Grabs state from store and maps it to props to be used on this component.
// Here we are destructuring the cartItems array off of our cart prop inside of our
// state.
const mapStateToProps = ({ cart: { cartItems }}) => ({

    // cartItems is an array of objects representing our individual cart items.
    cartItems
});

// connect(mapStateToProps) runs first passing in the function as an argument.
// This will grab the property from our state from store that we need to pass
// into our component.

// Then connect(CartDropDown) is ran where the props that we get back from mapStateToProps
// is passed into our component using currying.
export default connect(mapStateToProps)(CartDropDown);