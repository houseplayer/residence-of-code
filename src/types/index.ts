export interface ListElement {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export enum Action {
  ADD = 'ADD',
  DELETE = 'DELETE',
}
