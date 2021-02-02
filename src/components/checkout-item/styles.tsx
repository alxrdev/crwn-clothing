import styled, { css } from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`

const ItemInfos = css`
  width: 23%;
`

export const ItemName = styled.span`
  ${ItemInfos}
`

export const ItemQuantity = styled.span`
  padding-left: 20px;
  display: flex;

  ${ItemInfos}
`

export const ItemPrice = styled.span`
  ${ItemInfos}
`

export const ItemQuantityArrow = styled.div`
  cursor: pointer;
`

export const ItemQuantityValue = styled.div`
  margin: 0 10px;
`

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`