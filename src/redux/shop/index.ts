import {
  ShopState,
  ShopActionTypes,
  UPDATE_COLLECTIONS
} from './types'

import SHOP_DATA from './data'

const INITIAL_STATE: ShopState = {
  collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action: ShopActionTypes): ShopState => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}

export default shopReducer
