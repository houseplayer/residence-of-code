import { Action, Subscriber } from '@/types';
import { experimental_useOptimistic } from 'react';

interface Props {
  subscribers: Subscriber[];
}

const useOptimisticSubscribers = ({ subscribers }: Props) => {
  const [optimisticSubscribers, setOptimisticSubscribers] = experimental_useOptimistic(
    subscribers,
    (state, { action, subscriber }: { action: Action; subscriber: Subscriber }) => {
      switch (action) {
        case 'ADD':
          return [subscriber, ...state];
        case 'DELETE':
          return state.filter(({ id }) => id !== subscriber.id);
        default:
          return state;
      }
    },
  );
  return { optimisticSubscribers, setOptimisticSubscribers };
};

export default useOptimisticSubscribers;
