import { Add_To_Cart } from "./constants"

const initialState = {
    cartData: []
}

const cartItems = (state = initialState, action) => {
    switch (action.type) {
        case Add_To_Cart:
            return {
                ...state,
                cartData: action.Data
            }
        default:
            return state
    }
}

export default cartItems;