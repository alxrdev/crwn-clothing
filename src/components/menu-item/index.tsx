import React from 'react'

import {
  MenuItemContainer,
  MenuBackgroundImage,
  MenuItemContent,
  MenuItemTitle,
  MenuItemSubtitle
} from './styles'

interface Props {
  title: string
  imageUrl: string
  size?: string
  linkUrl: string
}

const MenuItem: React.FC<Props> = ({ title, imageUrl, linkUrl, ...otherProps }) => (
  <MenuItemContainer to={linkUrl} {...otherProps}>
    <MenuBackgroundImage src={imageUrl} />
    <MenuItemContent>
      <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
      <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
    </MenuItemContent>
  </MenuItemContainer>
)

export default MenuItem
