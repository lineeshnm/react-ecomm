import { cartActionTypes } from './cart.types'
import { addItemtoCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemtoCart(state.cartItems, action.payload)
            }
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default: 
            return state;
    }
}

export default cartReducer;