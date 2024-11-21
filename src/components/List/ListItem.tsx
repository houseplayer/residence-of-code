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
    <div key={id} className="flex items-center py-1 border-b-1 border-black">
      <form action={formAction} className="basis-1/12">
        <Button label="X" className="py-0" />
      </form>
      <p className="basis-1/3">{createdAt.toLocaleDateString()}</p>
      <p className="basis-1/3">{email}</p>
      <p className="basis-1/3">{password}</p>
    </div>
  );
};

export default ListItem;
