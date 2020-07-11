import React from 'react'

import './styles.scss'

interface Props {
  type?: 'button' | 'submit' | 'reset'
}

const CustomButton: React.FC<Props> = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
)

export default CustomButton
