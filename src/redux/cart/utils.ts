import { Item } from '../types'
import { CartItem } from './types'

export const addItemToCart = (cartItems: Array<CartItem>, itemToAdd: Item) : Array<CartItem> => {
  const existingCartItem = cartItems.find(cartItem => cartItem.item.id === itemToAdd.id)
  
  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.item.id === itemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  }

  return [...cartItems, {item: itemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems: Array<CartItem>, itemToRemove: Item) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.item.id === itemToRemove.id
  )

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.item.id !== itemToRemove.id)
  }

  return cartItems.map(cartItem => (cartItem.item.id === itemToRemove.id) ?
    {
      ...cartItem,
      quantity: cartItem.quantity - 1
    } : {
      ...cartItem
    }
  )
}
