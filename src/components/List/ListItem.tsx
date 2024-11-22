'use client';

import { Action, ListElement } from '@/types';
import Button from '../Button';
import { deleteUser } from '@/utils/actions/userActions';
import toast from 'react-hot-toast';

interface Props {
  listElement: ListElement;
  setOptimisticData: (action: { action: Action; user: ListElement }) => void;
}

const ListItem = ({ listElement, setOptimisticData }: Props) => {
  const { email, password, id, createdAt } = listElement;

  const formAction = async () => {
    setOptimisticData({
      action: Action.DELETE,
      user: { id, email, password, createdAt },
    });

    const response = await deleteUser(id);

    if (!response.success) {
      toast.error(response.message);
    } else {
      toast.success(response.message);
    }
  };

  return (
    <div
      key={id}
      className="flex flex-col sm:flex-row items-center border-1 sm:border-0 sm:border-b-1 border-black mb-2 w-72 sm:w-full mx-auto py-4"
    >
      <p className="basis-1/3">{createdAt.toLocaleDateString()}</p>
      <p className="basis-1/3">{email}</p>
      <p className="basis-1/3">{password}</p>
      <form action={formAction} className="basis-1/12 mt-2">
        <Button label="X" className="w-8 h-8 flex items-center justify-center" />
      </form>
    </div>
  );
};

export default ListItem;
