import { createSelector } from 'reselect'
import { RootState } from '../root-reducer'

const selectShop = (state: RootState) => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = (collectionUrlParam: string) => 
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
  )

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)
