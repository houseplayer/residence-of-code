export interface ListElement {
  id: string;
  text: string;
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export enum Action {
  ADD = 'ADD',
  DELETE = 'DELETE',
}
