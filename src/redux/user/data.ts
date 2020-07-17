export interface User {
  id: string
  displayName: string
  email: string
  createdAt: Date
}

export interface UserState {
  currentUser: User | null
}
