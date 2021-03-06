import React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Item } from '../../redux/types'
import { CartActionTypes } from '../../redux/cart/types'
import { addItem } from '../../redux/cart/actions'

import {
  CollectionItemContainer,
  ItemImage,
  CollectionItemFooter,
  CollectionItemName,
  CollectionItemPrice,
  AddToCartButton
} from './styles'

interface Props {
  item: Item
  addItem: (i: Item) => CartActionTypes
}

const CollectionItem: React.FC<Props> = ({ item, addItem }) => {
  const { name, imageUrl, price } = item

  return (
    <CollectionItemContainer>
      <ItemImage style={{backgroundImage: `url(${imageUrl})`}} />
      <CollectionItemFooter>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>{price}</CollectionItemPrice>
      </CollectionItemFooter>
      
      <AddToCartButton
        onClick={() => addItem(item)}
        inverted={true}
      >
        Add to cart
      </AddToCartButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  addItem: (item: Item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
