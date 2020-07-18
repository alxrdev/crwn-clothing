import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { User } from '../../redux/user/data'

import CartIcon from '../cart-icon'
import CartDropdown from '../cart-dropdown'

import './styles.scss'
import Logo from '../../assets/crown.svg'

interface Props {
  currentUser: User | null,
  cartHidden: boolean
}

const Header: React.FC<Props> = ({ currentUser, cartHidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={Logo} alt='Logo' className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
      ) : (
        <Link className='option' to='/signin'>SIGN IN</Link>
      )}

      <CartIcon />
    </div>
    {cartHidden ? null : <CartDropdown />}
  </div>
)

const mapStateToProps = (state: RootState) => ({
  currentUser: state.user.currentUser,
  cartHidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header)
