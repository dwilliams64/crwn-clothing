import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({

    // We are not passing in a payload because we do not need it because
    // we are just switching our state on the CartDropDown component and do not require
    // payload data.

    // payload is optional.
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});