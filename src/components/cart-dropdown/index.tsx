import React from 'react'

import { connect } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { CartItem } from '../../redux/cart/types'

import CustomButtom from '../custom-button'
import CartItemComponent from '../cart-item'

import './styles.scss'

interface Props {
  cartItems: Array<CartItem>
}

const CartDropdown: React.FC<Props> = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => <CartItemComponent key={cartItem.item.id} cartItem={cartItem} />)}
    </div>
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
  </div>
)

const mapStateToProps = (state: RootState) => ({
  cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown)
