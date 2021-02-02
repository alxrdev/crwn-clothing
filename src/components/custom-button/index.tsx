import React, { MouseEventHandler } from 'react'

import { CustomButtonContainer } from './styles'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler
  isGoogleSignIn?: boolean
  inverted?: boolean
}

const CustomButton: React.FC<Props> = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>
    {children}
  </CustomButtonContainer>
)

export default CustomButton
