const INTIAL_STATE = {
    currentUser: null
}

// User Reducer.
// This reducer will handle user state in our app.
// This reducer will pass its payload and state to the Root Reducer.
const userReducer = (state = INTIAL_STATE, action) => {
    // Used to check type. If type matches then this reducer returns state and payload to Root reducer.
    // If type does not match current state is returned to the Root reducer.
    switch (action.type) {        
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
            
        default:
            return state;
    }
}

export default userReducer;