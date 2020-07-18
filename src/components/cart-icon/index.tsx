import React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { CartActionTypes } from '../../redux/cart/types'
import { toggleCartHidden } from '../../redux/cart/actions'

import './styles.scss'
import shoppingIcon from '../../assets/shopping-bag.svg'

interface Props {
  toggleCartHidden: () => CartActionTypes
}

const CartIcon: React.FC<Props> = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <img src={shoppingIcon} alt='Cart' className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
