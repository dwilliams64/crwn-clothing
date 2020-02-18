// Actions are just functions that return objects.
// Actions are triggered inside of our app and they pass an object to a reducer.

export const setCurrentUser = user => ({
    // The following properties are used inside of reducers. 

    // type is used for the case checking inside of the switch statment that is inside of our user-reducer.

    // String value used inside of reducers.
    
    // If the action type matches inside of a reducer then
    // this action will be used by that reducer.   
    type: 'SET_CURRENT_USER',

    // Payload is a flexible property used to update state. 
    payload: user
})