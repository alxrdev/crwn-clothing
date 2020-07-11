import React from 'react'

import './styles.scss'

import CollectionItem from '../collection-item'

interface Props {
  title: string
  items: Array<{
    id: number
    name: string
    imageUrl: string
    price: number
  }>
}

const CollectionPreview: React.FC<Props> = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map(({ ...itemProps }) => (
        <CollectionItem key={itemProps.id} {...itemProps} />
      ))}
    </div>
  </div>
)

export default CollectionPreview
