import CartActionTypes from './cart.types';

// Importing function from cart utilities.
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: false,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,               
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,

                // Using utility function.
                // 1st argument is our cartItems array.
                // 2nd argument is the new item we wish to add coming in from the action.payload.
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default: 
            return state;
    }
}

export default cartReducer;