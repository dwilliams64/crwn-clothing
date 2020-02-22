import React from 'react';

import './cart-item.styles.scss';

// Destructuring the properties we need from the prop that was passed in from
// the cart-dropdown component.

// We are using the advanced destructuring to pull the propteries that we
// need from the cart item.

// We then pass in each property we need to our CartItem component.
const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
            {quantity} x ${price}
        </span>
        </div>
    </div>
)

export default CartItem;