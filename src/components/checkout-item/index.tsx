import React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/actions'

import { Item, CartItem, CartActionTypes } from '../../redux/cart/types'

import './styles.scss'

interface Props {
  cartItem: CartItem
  clearItem: (i: Item) => CartActionTypes
  addItem: (i: Item) => CartActionTypes
  removeItem: (i: Item) => CartActionTypes
}

const CheckoutItem: React.FC<Props> = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { item, quantity } = cartItem

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <span className='name'>{item.name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => removeItem(item)}
        >&#10094;</div>
        <span className='value'>{quantity}</span>
        <div
          className='arrow'
          onClick={() => addItem(item)}
        >&#10095;</div>
      </span>
      <span className='price'>${item.price}</span>
      <div
        className='remove-button'
        onClick={() => clearItem(item)}
      >&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  clearItem: (item: Item) => dispatch(clearItemFromCart(item)),
  addItem: (item: Item) => dispatch(addItem(item)),
  removeItem: (item: Item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
