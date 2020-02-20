import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,

                // We are using !state.hidden here instead of action because
                // we are just changing the state of our component (CartDropDown) and do not
                // require the action payload to change our state.                
                hidden: !state.hidden
            }
        default: 
            return state;
    }
}

export default cartReducer;