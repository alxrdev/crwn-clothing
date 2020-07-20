import React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../redux/root-reducer'
import { CartActionTypes } from '../../redux/cart/types'
import { toggleCartHidden } from '../../redux/cart/actions'
import { selectCartItemsCount } from '../../redux/cart/selectors'

import './styles.scss'
import shoppingIcon from '../../assets/shopping-bag.svg'

interface Props {
  toggleCartHidden: () => CartActionTypes
  itemCount: number
}

const CartIcon: React.FC<Props> = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <img src={shoppingIcon} alt='Cart' className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state: RootState) => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
