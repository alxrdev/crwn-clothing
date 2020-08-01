import React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Item } from '../../redux/types'
import { CartActionTypes } from '../../redux/cart/types'
import { addItem } from '../../redux/cart/actions'

import CustomButton from '../custom-button'

import './styles.scss'

interface Props {
  item: Item
  addItem: (i: Item) => CartActionTypes
}

const CollectionItem: React.FC<Props> = ({ item, addItem }) => {
  const { name, imageUrl, price } = item

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{backgroundImage: `url(${imageUrl})`}}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      
      <CustomButton
        onClick={() => addItem(item)}
        inverted={true}
      >
        Add to cart
      </CustomButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  addItem: (item: Item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
