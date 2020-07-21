import React from 'react'

import { connect } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { CartItem } from '../../redux/cart/types'

import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/selectors'

import CheckoutItem from '../../components/checkout-item'

import './styles.scss'

interface Props {
  cartItems: Array<CartItem>
  total: number
}

const CheckoutPage: React.FC<Props> = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => <CheckoutItem key={cartItem.item.id} cartItem={cartItem} />)}

    <div className='total'>
      <span>Total: ${total}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector<RootState, Props>({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
