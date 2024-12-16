export interface Category {
  id: string
  name: string
}

export interface Subscriber {
  id: string
  email: string
  name: string
  createdAt: Date
}

export interface Post {
  id: string
  title: string
  author: string
  createdAt: Date
  updatedAt: Date
  categories: {
    name: string
  }[]
}

export interface mappedPost {
  id: string
  title: string
  author: string
  createdAt: Date
  updatedAt: Date
  categories: string[]
}

export enum Action {
  ADD = "ADD",
  DELETE = "DELETE",
}
