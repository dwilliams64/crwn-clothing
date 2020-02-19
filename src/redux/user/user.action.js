import { UserActoinTypes } from './user.types'

export const setCurrentUser = user => ({
    type: UserActoinTypes.SET_CURRENT_USER, 
    payload: user
});