import React from 'react'

import { Item } from '../../redux/types'

import CollectionItem from '../collection-item'

import {
  CollectionPreviewContainer,
  PreviewTitle,
  PreviewContent
} from './styles'

interface Props {
  title: string
  items: Array<Item>
}

const CollectionPreview: React.FC<Props> = ({ title, items }) => (
  <CollectionPreviewContainer>
    <PreviewTitle>{title.toUpperCase()}</PreviewTitle>
    <PreviewContent>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </PreviewContent>
  </CollectionPreviewContainer>
)

export default CollectionPreview
