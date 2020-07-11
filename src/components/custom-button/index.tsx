import React, { MouseEventHandler } from 'react'

import './styles.scss'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler
  isGoogleSignIn?: boolean
}

const CustomButton: React.FC<Props> = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton
