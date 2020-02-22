import { createSelector } from 'reselect';

// There are two types of selectors:

// 1. Input selector - This doesn't use createSelector

// 2. Output selector - Uses input selectors and createSelector to build themselves.

// Input selector example:

// An input selector is a function that takes the whole state and returns just a
// slice of it, usally one layer deep.

// Naming of function starts with select.

// We are grabing the whole state and returning just the cart
// property on our reducer state object.
const selectCart =  state => state.cart;

// Output selector.

// CartItems is property on our cart.


// Because we are using createSelector to create this selector
// it is now a memoizted selector.
export const selectCartItems = createSelector(

    // Takes two arguments:

    // 1st argument collection/array of selectors.
    [selectCart],

    // 2nd argument is a function that returns the value we want out of the
    // selectors. The second argument will be the output of the input selectors in
    // the array above in the same order that the inputs where put in that array.

    // Example:

    /*
        [selectCart, selectUser],
        (cart, user) =>
    
    */    

    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(

    // Refernces selectCartItems
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulateQuantity, cartItem) => 
                accumulateQuantity + cartItem.quantity, 
            0
        )
);