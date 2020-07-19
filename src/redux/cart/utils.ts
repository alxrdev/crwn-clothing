import { Item, CartItem } from './types'

export const addItemToCart = (cartItems: Array<CartItem>, itemToAdd: Item) : Array<CartItem> => {
  const existingCartItem = cartItems.find(cartItem => cartItem.item.id === itemToAdd.id)
  
  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.item.id === itemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  }

  return [...cartItems, {item: itemToAdd, quantity: 1}]
}
