export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartITem = cartItems.find((cartItem) =>
        cartItem.id === itemToAdd.id
    )
    if (existingCartITem) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    return[...cartItems,{...itemToAdd,quantity:1}]
}

export const removeItemFromCart=(cartItems,cartItemToRemove)=>{
    const existingCartITem = cartItems.find((cartItem) =>
    cartItem.id === cartItemToRemove.id
)
    if(existingCartITem.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem=>
        cartItem.id===cartItemToRemove.id?
        {...cartItem,quantity:cartItem.quantity-1}
        :cartItem
    )
}