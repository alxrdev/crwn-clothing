import React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/actions'

import { Item } from '../../redux/types'
import { CartItem, CartActionTypes } from '../../redux/cart/types'

import {
  CheckoutItemContainer,
  ImageContainer,
  ItemImage,
  ItemName,
  ItemQuantity,
  ItemQuantityArrow,
  ItemQuantityValue,
  ItemPrice,
  RemoveButton
} from './styles'

interface Props {
  cartItem: CartItem
  clearItem: (i: Item) => CartActionTypes
  addItem: (i: Item) => CartActionTypes
  removeItem: (i: Item) => CartActionTypes
}

const CheckoutItem: React.FC<Props> = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { item, quantity } = cartItem

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ItemImage src={item.imageUrl} alt={item.name} />
      </ImageContainer>
      <ItemName>{item.name}</ItemName>
      <ItemQuantity>
        <ItemQuantityArrow onClick={() => removeItem(item)}>
          &#10094;
        </ItemQuantityArrow>
        <ItemQuantityValue>{quantity}</ItemQuantityValue>
        <ItemQuantityArrow onClick={() => addItem(item)}>
          &#10095;
        </ItemQuantityArrow>
      </ItemQuantity>
      <ItemPrice>${item.price}</ItemPrice>
      <RemoveButton onClick={() => clearItem(item)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  clearItem: (item: Item) => dispatch(clearItemFromCart(item)),
  addItem: (item: Item) => dispatch(addItem(item)),
  removeItem: (item: Item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
