import React from 'react'

import { connect } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { Collection } from '../../redux/shop/types'

import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/selectors'

import CollectionPreview from '../../components/collection-preview'

interface Props {
  collections: Array<Collection>
}

const ShopPage: React.FC<Props> = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector<RootState, Props>({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage)
