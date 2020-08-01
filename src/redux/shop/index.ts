import { ShopState, ShopActionTypes } from './types'
import SHOP_DATA from './data'

const INITIAL_STATE: ShopState = {
  collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action: ShopActionTypes): ShopState => {
  switch (action.type) {
    default:
      return state
  }
}

export default shopReducer
