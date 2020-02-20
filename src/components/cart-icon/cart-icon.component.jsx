import React from 'react';
import { connect } from 'react-redux';

// Importing in action. This component recieves an action because we want
// the user to click on the cart-icon component to trigger the hidding
// showing of the cart drop down component.
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    null, 
    mapDispatchToProps
)(CartIcon);