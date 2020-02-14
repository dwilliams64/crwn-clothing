// The root reducer is the base reducer object that will combine all of states together.

// Function from the redux lib that will combine all our reducers.
import { combineReducers } from 'redux';

// Importing user reducer.
import userReducer from './user/user-reducer';

// Combines all othe reducers into one giant object the manages state (object is the store)
export default combineReducers ({
    // Our user reducer property in this object.
    user: userReducer
}); 

