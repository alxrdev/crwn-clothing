import React from 'react'

import { connect } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { Collection } from '../../redux/shop/types'

import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/selectors'

import CollectionPreview from '../collection-preview'

import './styles.scss'

interface Props {
  collections: Array<Collection>
}

const CollectionsOverview: React.FC<Props> = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector<RootState, Props>({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
