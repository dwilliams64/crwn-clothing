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