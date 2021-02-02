import React from 'react'

import { CartItem as CartItemEntity } from '../../redux/cart/types'

import {
  CartItemContainer,
  CartItemImg,
  ItemDetailsContainer,
  ItemDetailsName,
  ItemDetailsPrice
} from './styles'

interface Props {
  cartItem: CartItemEntity
}

const CartItem: React.FC<Props> = ({ cartItem: { item, quantity } }) => (
  <CartItemContainer>
    <CartItemImg src={item.imageUrl} alt='item' />
    <ItemDetailsContainer>
      <ItemDetailsName>{item.name}</ItemDetailsName>
      <ItemDetailsPrice>{quantity} ${item.price}</ItemDetailsPrice>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem
