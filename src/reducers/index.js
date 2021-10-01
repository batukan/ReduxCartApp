import { data } from "../data";

const INITIAL_STATE = {
    bookList: data,
    cart: []
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: state.cart.find(item => item.id === action.payload.id)
                    ? state.cart.map(item => item.id === action.payload.id
                        ? { ...item, count: item.count + 1 }
                        : item)
                    : [...state.cart, { ...action.payload, count: 1 }]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case "INCREASE_BOOK_COUNTER":
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload
                    ? { ...item, count: item.count + 1 }
                    : item)
            }
        case "DECREASE_BOOK_COUNTER":
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload
                    ? {
                        ...item, count: item.count > 1
                            ? item.count - 1
                            : 1
                    }
                    : item
                )
            }
        default:
            return state;
    }
}