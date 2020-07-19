import React from 'react'

import { CartItem as CartItemEntity } from '../../redux/cart/types'

import './styles.scss'

interface Props {
  cartItem: CartItemEntity
}

const CartItem: React.FC<Props> = ({ cartItem: { item, quantity } }) => (
  <div className='cart-item'>
    <img src={item.imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{item.name}</span>
      <span className='price'>{quantity} ${item.price}</span>
    </div>
  </div>
)

export default CartItem
