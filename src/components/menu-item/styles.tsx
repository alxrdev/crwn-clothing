import { Link } from 'react-router-dom'
import styled from 'styled-components'

const getMenuItemSize = (props: any) => {
  if (props.size && props.size === 'large') {
    return `height: 380px;`
  }
  
  return 'height: 240px;'
}

export const MenuItemContainer = styled(Link)`
  min-width: 30%;
  ${getMenuItemSize}
  flex: 1 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`

const getMenuImageSrc = (props: any) => {
  if (props.src) {
    return `background-image: url(${props.src})`
  }
  
  return ''
}

export const MenuBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  ${getMenuImageSrc}

  ${MenuItemContainer}:hover & {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`

export const MenuItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #fff;
  opacity: 0.7;
  position: absolute;

  ${MenuItemContainer}:hover & {
    opacity: 0.9;
  }
`

export const MenuItemTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`

export const MenuItemSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`