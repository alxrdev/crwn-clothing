import { Item } from '../types'

export interface Collection {
  id: number
  title: string
  routeName: string
  items: Array<Item>
}

export interface ShopState {
  collections: { [key: string]: Collection }
}

export interface DefaultAction {
  type: string
}

export type ShopActionTypes = DefaultAction
