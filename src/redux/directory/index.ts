import { DirectoryState, DirectoryActionTypes } from './types'
import DIRECTORY_DATA from './data'

const INITIAL_STATE: DirectoryState = {
  sections: DIRECTORY_DATA
}

const directoryReducer = (state = INITIAL_STATE, action: DirectoryActionTypes): DirectoryState => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
