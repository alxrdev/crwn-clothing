import React from 'react'

import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/collection-preview'

interface Collection {
  id: number
  title: string
  routeName: string
  items: Array<{
    id: number
    name: string
    imageUrl: string
    price: number
  }>
}

interface Props {}

interface States {
  collections: Array<Collection>
}

export default class ShopPage extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props)

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}
