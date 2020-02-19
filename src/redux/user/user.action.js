import { UserActoinTypes } from './user.types'

export const setCurrentUser = user => ({

    // Using our action type from user.types.js
    type: UserActoinTypes.SET_CURRENT_USER, 
    payload: user
});