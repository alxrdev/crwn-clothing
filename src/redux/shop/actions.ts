import { CollectionData, ShopActionTypes, UPDATE_COLLECTIONS } from './types'

export function updateCollections(collectionsMap: CollectionData) : ShopActionTypes {
  return {
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
  }
}