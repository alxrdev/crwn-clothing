import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { fetchCollectionsStartAsync } from '../../redux/shop/actions'
import { selectIsCollectionFetching } from '../../redux/shop/selectors'

import WithSpinner from '../../components/with-spinner'
import CollectionsOverview from '../../components/collections-overview'
import CollectionPage from '../collection'
import { ThunkDispatch } from 'redux-thunk'

interface Props extends RouteComponentProps {
  fetchCollectionsStartAsync: typeof fetchCollectionsStartAsync
  isCollectionFetching: boolean
}

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component<Props> {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match, isCollectionFetching } = this.props

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={
            (props) =>
              <CollectionsOverviewWithSpinner
                isLoading={isCollectionFetching}
                {...props}
              />
          }
          />
        <Route
          path={`${match.path}/:collectionId`}
          render={
            (props) =>
              <CollectionPageWithSpinner
                isLoading={isCollectionFetching}
                {...props}
              />
          }
        />
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  isCollectionFetching: selectIsCollectionFetching(state)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, null, any>) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
