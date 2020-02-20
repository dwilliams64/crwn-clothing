import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';

// Adding cartReducer to Root Reducer
export default combineReducers ({
    user: userReducer,
    cart: cartReducer
}); 