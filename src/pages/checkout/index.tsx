import React from 'react'

import { connect } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { CartItem } from '../../redux/cart/types'

import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/selectors'

import CheckoutItem from '../../components/checkout-item'

import {
  CheckoutPageContainer,
  CheckoutPageHeader,
  CheckoutPageHeaderBlock,
  CheckoutPageTotal,
  CheckoutPageWarning,
  CheckoutPageButton
} from './styles'
import StripeButton from '../../components/stripe-button'

interface Props {
  cartItems: Array<CartItem>
  total: number
}

const CheckoutPage: React.FC<Props> = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutPageHeader>
      <CheckoutPageHeaderBlock>
        <span>Product</span>
      </CheckoutPageHeaderBlock>
      <CheckoutPageHeaderBlock>
        <span>Description</span>
      </CheckoutPageHeaderBlock>
      <CheckoutPageHeaderBlock>
        <span>Quantity</span>
      </CheckoutPageHeaderBlock>
      <CheckoutPageHeaderBlock>
        <span>Price</span>
      </CheckoutPageHeaderBlock>
      <CheckoutPageHeaderBlock>
        <span>Remove</span>
      </CheckoutPageHeaderBlock>
    </CheckoutPageHeader>

    {cartItems.map(cartItem => <CheckoutItem key={cartItem.item.id} cartItem={cartItem} />)}

    <CheckoutPageTotal>
      <span>Total: ${total}</span>
    </CheckoutPageTotal>

    <CheckoutPageWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
    </CheckoutPageWarning>

    <CheckoutPageButton>
      <StripeButton price={total} />
    </CheckoutPageButton>
  </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector<RootState, Props>({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
