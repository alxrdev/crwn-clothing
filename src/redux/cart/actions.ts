import { Item } from '../types'
import {
  CartActionTypes,
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
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

export function clearItemFromCart(item: Item): CartActionTypes {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: item
  }
}

export function removeItem(item: Item): CartActionTypes {
  return {
    type: REMOVE_ITEM,
    payload: item
  }
}
