import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import {
  CollectionData,
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  ShopActionTypes,
  ShopThunk
} from './types'

export function fetchCollectionsStart() : ShopActionTypes {
  return {
    type: FETCH_COLLECTIONS_START
  }
}

export function fetchCollectionsSuccess(collectionsMap: CollectionData) : ShopActionTypes {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  }
}

export function fetchCollectionsFailure(errorMessage: string) : ShopActionTypes {
  return {
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  }
}

export function fetchCollectionsStartAsync() : ShopThunk{
  return dispatch => {
    const collectionRef = firestore.collection('collections')

    dispatch(fetchCollectionsStart())

    collectionRef.get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap))
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}