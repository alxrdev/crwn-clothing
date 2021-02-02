import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../redux/root-reducer'
import { CartItem, CartActionTypes } from '../../redux/cart/types'
import { toggleCartHidden } from '../../redux/cart/actions'

import { selectCartItems } from '../../redux/cart/selectors'

import CustomButton from '../custom-button'
import CartItemComponent from '../cart-item'

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage
} from './styles'

interface Props extends RouteComponentProps {
  cartItems: Array<CartItem>
  dispatch: Dispatch<CartActionTypes>
}

const CartDropdown: React.FC<Props> = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => <CartItemComponent key={cartItem.item.id} cartItem={cartItem} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItemsContainer>
    <CustomButton onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHidden())
    }}>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
)

const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
