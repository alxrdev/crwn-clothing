export interface User {
  id: string
  displayName: string
  email: string
  createdAt: Date
}

export interface Item {
  id: number
  name: string
  imageUrl: string
  price: number
}
