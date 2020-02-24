import { combineReducers } from 'redux';

// Persists our reducer
import { persistReducer } from 'redux-persist';

// Brings in our localStorage from our window object inside of our browser.
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer
}); 

export default persistReducer(persistConfig, rootReducer);