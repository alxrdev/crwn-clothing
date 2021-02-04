import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { CollectionData, ShopActionTypes } from '../../redux/shop/types'
import { updateCollections } from '../../redux/shop/actions'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import WithSpinner from '../../components/with-spinner'
import CollectionsOverview from '../../components/collections-overview'
import CollectionPage from '../collection'

interface Props extends RouteComponentProps {
  updateCollections: (collectionsMap: CollectionData) => ShopActionTypes
}

interface State {
  loading: boolean
}

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component<Props, State> {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const collectionRef = firestore.collection('collections')

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      this.props.updateCollections(collectionsMap)

      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={
            (props) =>
              <CollectionsOverviewWithSpinner
                isLoading={loading}
                {...props}
              />
          }
          />
        <Route
          path={`${match.path}/:collectionId`}
          render={
            (props) =>
              <CollectionPageWithSpinner
                isLoading={loading}
                {...props}
              />
          }
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ShopActionTypes>) => ({
  updateCollections: (collectionsMap: CollectionData) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
