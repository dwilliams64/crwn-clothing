import { combineReducers } from 'redux';

// Persists our reducer
import { persistReducer } from 'redux-persist';

// Brings in our localStorage from our window object inside of our browser.
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';


// Persist config

// An object that defines the possiable configuration we want 
// persist-redux to use.
const persistConfig = {

    // Repersents at what point in our reducer object do we want to start
    // storing information. For us we want it at the top level so we pass in root
    // as a value.
    // Top level is the root-reducer.
    key: 'root',

    // Refers to the type of storage we are using (local or session)
    // we are using local storage so we will pass in storage from above.
    storage,

    // An array of reducers (in string value) that we want to store.
    // We do not need user because firebase is handling the user data session.
    // cart on the other hand isn't handled by anything to keep track of its info.
    // If the app is refreshed or closed the data is not stored for cart related info.
    whitelist: ['cart']
};

// Our root reducer.

// We changed the code to this so we can pass in our root reducer
// to the persistReducer HOC below.
const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer
}); 

//Returns our rootReducer with the persistConfig layered on top of it.
// This will return our rootReducer but now it has persistance capabilities.
export default persistReducer(persistConfig, rootReducer);