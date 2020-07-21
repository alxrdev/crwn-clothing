import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../redux/root-reducer'
import { CartItem, CartActionTypes } from '../../redux/cart/types'
import { toggleCartHidden } from '../../redux/cart/actions'

import { selectCartItems } from '../../redux/cart/selectors'

import CustomButtom from '../custom-button'
import CartItemComponent from '../cart-item'

import './styles.scss'

interface Props extends RouteComponentProps {
  cartItems: Array<CartItem>
  dispatch: Dispatch<CartActionTypes>
}

const CartDropdown: React.FC<Props> = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => <CartItemComponent key={cartItem.item.id} cartItem={cartItem} />)
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButtom onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHidden())
    }}>GO TO CHECKOUT</CustomButtom>
  </div>
)

const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
