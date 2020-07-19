import {
  Item,
  CartActionTypes,
  TOGGLE_CART_HIDDEN,
  ADD_ITEM
} from './types'

export function toggleCartHidden(): CartActionTypes {
  return {
    type: TOGGLE_CART_HIDDEN
  }
}

export function addItem(item: Item): CartActionTypes {
  return {
    type: ADD_ITEM,
    payload: item
  }
}
