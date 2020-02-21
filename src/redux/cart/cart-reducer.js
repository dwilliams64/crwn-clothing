import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: false,

    // Array to hold our cart items
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

                // ...state.cartItems will spread in our current states
                // array items.

                // action.payload will add new items to our array.
                // It will always add the new item to the end.
                cartItems: [...state.cartItems, action.payload]
            }
        default: 
            return state;
    }
}

export default cartReducer;