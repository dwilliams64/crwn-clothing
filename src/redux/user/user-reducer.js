// A reducer is a function that gets two arguments.

// 1st argument state object that represents the last state or initial state that we are 
// trying to store.

// 2nd argument action is an object that has a type property.

// Type recieves a string value, the string value will be the name of the action.

// Action can have another property called payload.

// Payload is a flexiable property used to update state.

/*

action object:

{
    type: 'SET_CURRENT_USER',
    payload: action.payload
}


*/

// We can pass in an object to set as the value in our state or we
// can use the value of payload to make tranformation to our state.

// When the component gets mounted for the first time the state is blank 
// until an action is taken.

// Because of this we have to set an initial state so redux has something to work
// with when the component is first mounted.

// We always give our state a starting value even when we where writing class
// components.

// Initial state for user when app is first turned on.
const INTIAL_STATE = {
    currentUser: null
}

// Note: state = INTIAL_STATE sets INTIAL_STATE as the default value for the state argument.
// If a value is not passed into the state argument INTIAL_STATE will automactically be used.
// This is an ES6 feature.



// Reducer for User state 
const userReducer = (state = INTIAL_STATE, action) => {

    // Checks for action type.
    // If case matches we return an object that contains the new state 
    // and payload. 
    // This return gets sent to the Root reducer.
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                // Spreads in the state which can be multiple properties
                ...state,
                currentUser: action.payload
            }
            
        default:
            // Reducers recieve every single action that gets fired
            // even if the the action has nothing to do with the reducer.

            // In this case if an action gets fired and is meant for another reducer and 
            // not our userReducer, we just want to return the state of our userReducer after
            // the action.type doesn't match.
        
            return state;
    }
}

export default userReducer;