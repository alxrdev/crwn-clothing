import { CartState, TOGGLE_CART_HIDDEN, CartActionTypes } from './types'

const INITIAL_STATE: CartState = {
  hidden: true
}

const cartReducer = (state = INITIAL_STATE, action: CartActionTypes): CartState => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

export default cartReducer
