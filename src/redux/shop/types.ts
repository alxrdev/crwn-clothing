import { ThunkAction } from 'redux-thunk'
import { RootState } from '../root-reducer'
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

export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START'
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS'
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE'

export interface ShopState {
  collections: CollectionData
  isFetching: boolean
  errorMessage?: string
}

export interface FetchCollectionsStart {
  type: typeof FETCH_COLLECTIONS_START
}

export interface FetchCollectionsSuccess {
  type: typeof FETCH_COLLECTIONS_SUCCESS
  payload: CollectionData
}

export interface FetchCollectionsFailure {
  type: typeof FETCH_COLLECTIONS_FAILURE
  payload: string
}

export type ShopActionTypes = FetchCollectionsStart | FetchCollectionsSuccess | FetchCollectionsFailure

/**
 * ThunkAction arguments:
 * 1° - The return type of the thunk's inner function
 * 2° - The redux state
 * 3° - Optional extra argument passed to the inner function
 * 4° - The (non-thunk) actions that can be dispatched
 */
export type ShopThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  ShopActionTypes
>
