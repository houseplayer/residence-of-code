'use client';

import { Subscriber } from '@/types';
import SubscribersListItem from './SubscribersListItem';
import useOptimisticSubscribers from '@/hooks/useOptimisticSubscribers';

export interface Props {
  subscribers: Subscriber[];
}

const SubscribersList = ({ subscribers }: Props) => {
  if (!subscribers.length) return;

  const { optimisticSubscribers, setOptimisticSubscribers } = useOptimisticSubscribers({
    subscribers,
  });

  return (
    <div className="mb-4">
      <h1 className="text-center font-semibold">Subscribers</h1>
      <div className="items-center py-1 border-b-1 border-black hidden sm:flex">
        <p className="basis-1/3">created</p>
        <p className="basis-1/3">email</p>
        <p className="basis-1/3">name</p>
        <p className="basis-1/12"></p>
      </div>
      {optimisticSubscribers?.map((listElement: Subscriber) => (
        <SubscribersListItem
          key={listElement.id}
          listElement={listElement}
          setOptimisticData={setOptimisticSubscribers}
        />
      ))}
    </div>
  );
};

export default SubscribersList;
