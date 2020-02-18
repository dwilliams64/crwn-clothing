import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';

// Root Reducer.
// Combines all reducers into one big object.
export default combineReducers ({
    user: userReducer
}); 

