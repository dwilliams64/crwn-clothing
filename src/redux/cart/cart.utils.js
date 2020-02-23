// Adds Item to cart
export const addItemToCart = (cartItems, addItem) => {
    const existingItem = cartItems.find(cartItem => 
        cartItem.id === addItem.id
    );

    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === addItem.id 
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [...cartItems, {...addItem, quantity: 1}];
}

// Removes item from cart
export const removeItemFromCart = (cartItems, removeItem) => {
    const existingItem = cartItems.find(cartItem =>
       cartItem.id === removeItem.id       
    )

    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== removeItem.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === removeItem.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    ); 
}

// Completly clears out item from cart
export const clearItemFromCart = ({cartItems}, payload) => {
    return cartItems.filter(
        cartItem => cartItem.id !== payload.id
    );
}