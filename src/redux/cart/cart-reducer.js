import CartActionTypes from './cart.actiontypes'
import {addItemToCart} from './cart-utils'

const INITIALIZE_STATE = {
    hidden : true,
    cartItems : []
}

const cartReducer = (state=INITIALIZE_STATE , action) =>{
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden : !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems : addItemToCart(state.cartItems,action.payload)
            }
    

        default:
            return state;
    }
}

export default cartReducer;