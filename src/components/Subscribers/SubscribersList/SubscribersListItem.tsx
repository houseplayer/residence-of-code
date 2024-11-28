'use client';

import { Action, Subscriber } from '@/types';
import { deleteSubscriberAction } from '@/app/actions/subscriberActions';
import Button from '../../Button';
import toast from 'react-hot-toast';

interface Props {
  listElement: Subscriber;
  setOptimisticData: (action: { action: Action; item: Subscriber }) => void;
}

const SubscribersListItem = ({ listElement, setOptimisticData }: Props) => {
  const { email, name, id, createdAt } = listElement;

  const deleteUser = async () => {
    setOptimisticData({
      action: Action.DELETE,
      item: { id, email, name, createdAt },
    });

    const response = await deleteSubscriberAction(id);

    if (!response.success) {
      toast.error(response.message);
    } else {
      toast.success(response.message);
    }
  };

  return (
    <div
      key={id}
      className="flex flex-col sm:flex-row items-center border-1 sm:border-0 sm:border-b-1 border-black w-72 sm:w-full mx-auto py-3 sm:py-2 mb-4 sm:mb-0"
    >
      <p className="basis-1/3">{createdAt.toLocaleDateString()}</p>
      <p className="basis-1/3">{email}</p>
      <p className="basis-1/3">{name}</p>
      <form action={deleteUser} className="basis-1/12 mt-2 sm:mt-0">
        <Button label="X" className="w-8 h-8 flex items-center justify-center" />
      </form>
    </div>
  );
};

export default SubscribersListItem;
