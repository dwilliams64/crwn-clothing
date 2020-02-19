import { UserActoinTypes } from './user.types'

const INTIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        
        // Using our action type from user.types.js
        case UserActoinTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
            
        default:
            return state;
    }
}

export default userReducer;