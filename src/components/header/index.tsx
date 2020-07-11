import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import User from '../../entities/user'

import './styles.scss'
import Logo from '../../assets/crown.svg'

interface Props {
  currentUser: User | null
}

const Header: React.FC<Props> = ({ currentUser }) => (
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
    </div>
  </div>
)

export default Header
