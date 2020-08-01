import { createSelector } from 'reselect'
import { RootState } from '../root-reducer'

const selectShop = (state: RootState) => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)
