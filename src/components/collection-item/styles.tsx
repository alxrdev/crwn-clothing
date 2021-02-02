import styled from 'styled-components'
import CustomButton from '../custom-button'

export const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  cursor: pointer;
`

export const ItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  transition: all ease-in .2s;

  ${CollectionItemContainer}:hover & {
    opacity: 0.8;
  }
`

export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  transition: all ease-in .2s;

  ${CollectionItemContainer}:hover & {
    opacity: 0.85;
    display: flex;
  }
`

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const CollectionItemName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

export const CollectionItemPrice = styled.span`
  width: 10%;
`