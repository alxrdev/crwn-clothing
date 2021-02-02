import React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../redux/root-reducer'
import { CartActionTypes } from '../../redux/cart/types'
import { toggleCartHidden } from '../../redux/cart/actions'
import { selectCartItemsCount } from '../../redux/cart/selectors'

import {
  CartIconContainer,
  ShopIconImg,
  ItemCount
} from './styles'
import shoppingIcon from '../../assets/shopping-bag.svg'

interface Props {
  toggleCartHidden: () => CartActionTypes
  itemCount: number
}

const CartIcon: React.FC<Props> = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShopIconImg src={shoppingIcon} alt='Cart' />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
)

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state: RootState) => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
