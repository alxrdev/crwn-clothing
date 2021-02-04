import { Item } from '../types'

export interface Collection {
  id: number
  title: string
  routeName: string
  items: Array<Item>
}

export interface CollectionData {
  [key: string]: Collection
}

export const UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS'

export interface ShopState {
  collections: CollectionData
}

export interface UpdateCollections {
  type: typeof UPDATE_COLLECTIONS
  payload: CollectionData
}

export type ShopActionTypes = UpdateCollections
