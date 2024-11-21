'use client';

import AddUserForm from '@/components/AddUserForm';
import List from '@/components/List';
import { Action, ListElement } from '@/types';
import { experimental_useOptimistic } from 'react';

interface Props {
  users: ListElement[];
}

const Users = ({ users }: Props) => {
  const [optimisticUsers, setOptimisticUser] = experimental_useOptimistic(
    users,
    (state, { action, user }: { action: Action; user: ListElement }) => {
      switch (action) {
        case 'ADD':
          return [...state, user];
        case 'DELETE':
          return state.filter(({ id }) => id !== user.id);
        default:
          return state;
      }
    },
  );

  return (
    <>
      <List data={optimisticUsers} setOptimisticData={setOptimisticUser} />
      <AddUserForm setOptimisticData={setOptimisticUser} />
    </>
  );
};

export default Users;
