export const AddToCart = book => {
    return { type: "ADD_TO_CART", payload: book }
}

export const RemoveFromCart = id => {
    return { type: "REMOVE_FROM_CART", payload: id }
}

export const IncreaseBookCounter = id => {
    return { type: "INCREASE_BOOK_COUNTER", payload: id }
}

export const DecreaseBookCounter = id => {
    return { type: "DECREASE_BOOK_COUNTER", payload: id }
}