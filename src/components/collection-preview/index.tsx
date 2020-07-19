import React from 'react'

import { Item } from '../../redux/cart/types'

import CollectionItem from '../collection-item'

import './styles.scss'

interface Props {
  title: string
  items: Array<Item>
}

const CollectionPreview: React.FC<Props> = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
)

export default CollectionPreview
