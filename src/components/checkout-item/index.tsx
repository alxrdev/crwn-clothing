import React from 'react'

import { CartItem } from '../../redux/cart/types'

import './styles.scss'

interface Props {
  cartItem: CartItem
}

const CheckoutItem: React.FC<Props> = ({ cartItem: { item, quantity } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={item.imageUrl} alt={item.name} />
    </div>
    <span className='name'>{item.name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>${item.price}</span>
    <div className='remove-button'>&#10005;</div>
  </div>
)

export default CheckoutItem
