export const addToCart = (pizza, quantity, varient) => (dispatch, getstate) => {
    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: Number(quantity),
        prices: pizza.prices,
        price: pizza.prices[0][varient] * quantity
    }
    if (cartItem.quantity > 10) {
        alert('You cannot add more than 10 quantities')
    }
    else {
        if (cartItem.quantity < 0) {
            dispatch({ type: 'DELETE_FROM_CART', payload: pizza })
        }
        else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem })
        }
    }
    const cartItems = getstate().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}
// npm i react-router-dom
export const deleteFromCart = (pizza) => (dispatch, getstate) => {

    dispatch({ type: 'DELETE_FROM_CART', payload: pizza })
    const cartItems = getstate().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}