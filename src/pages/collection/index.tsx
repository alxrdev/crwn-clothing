import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { selectCollection } from '../../redux/shop/selectors'
import { Collection } from '../../redux/shop/types'

import CollectionItem from '../../components/collection-item'

import './styles.scss'

interface RouterProps {
  collectionId: string
}

interface Props extends RouteComponentProps<RouterProps> {
  collection: Collection | undefined
}

const CollectionPage: React.FC<Props> = ({ collection }) => (
  <div className='collection-page'>
    <h2>{ collection?.title }</h2>
    <div className='items'>
      {collection?.items.map(
        item => <CollectionItem key={item.id} item={item} />
      )}
    </div>
  </div>
)

const mapStateToProps = (state: RootState, ownProps: Props) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
