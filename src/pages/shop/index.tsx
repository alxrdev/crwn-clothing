import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { CollectionData, ShopActionTypes } from '../../redux/shop/types'
import { updateCollections } from '../../redux/shop/actions'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import CollectionsOverview from '../../components/collections-overview'
import CollectionPage from '../collection'

interface Props extends RouteComponentProps {
  updateCollections: (collectionsMap: CollectionData) => ShopActionTypes
}

class ShopPage extends React.Component<Props> {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const collectionRef = firestore.collection('collections')

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      this.props.updateCollections(collectionsMap)
    })
  }

  render() {
    const { match } = this.props

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ShopActionTypes>) => ({
  updateCollections: (collectionsMap: CollectionData) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
