export interface Subscriber {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export enum Action {
  ADD = 'ADD',
  DELETE = 'DELETE',
}
