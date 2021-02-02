import React from 'react'

import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { User } from '../../redux/types'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/selectors'
import { selectCurrentUser } from '../../redux/user/selectors'

import CartIcon from '../cart-icon'
import CartDropdown from '../cart-dropdown'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from './styles'
import Logo from '../../assets/crown.svg'

interface Props {
  currentUser: User | null,
  cartHidden: boolean
}

const Header: React.FC<Props> = ({ currentUser, cartHidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <img src={Logo} alt='Logo' className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}

      <CartIcon />
    </OptionsContainer>
    {cartHidden ? null : <CartDropdown />}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector<RootState, Props>({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
