export interface User {
  id: string
  displayName: string
  email: string
  createdAt: Date
}

export interface UserState {
  currentUser: User | null
}

export const SET_CURRENT_USER = 'SET_CURRENT_USER'

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER
  payload: User | null
}

export type UserActionTypes = SetCurrentUserAction
