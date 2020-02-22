/*

Utility functions allow us to keep our files clean and organize
functions that we may need in multiple files in one location.

*/

// Remember in order for React to re render its components we must return
// a brand new version of state.

export const addItemToCart = (cartItems, addItem) => {

    // Checks if item exists in cart.
    // If it does then it will stored in our constant.
    // If not then undefined is returned.
    const existingItem = cartItems.find(cartItem => 
        cartItem.id === addItem.id
    );
    
    // Checks for existing item.
    if (existingItem) {

        // .map() returns a brand new array which will cause React to re render its component.
        return cartItems.map(cartItem =>
            
            // If the item's id in the array matches the item's id we wish to add
            // then we will increase the quantity by 1.
            cartItem.id === addItem.id 
                ? {...cartItem, quantity: cartItem.quantity + 1}
                
                // If the item doesn't match we will return the item.
                // If we do not do this we will get undefined.
                : cartItem
        );
    }

    // Returns a brand new array which will cause React to re render its component.
    // This will return a new array with the new item we added with the quantity set to 1.
    return [...cartItems, {...addItem, quantity: 1}];
}