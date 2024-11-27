'use client';

import { addSubscriberAction } from '@/utils/actions/subscriberActions';
import Button from '../../Button';
import Input from '../../Input';
import { Action, Subscriber } from '@/types';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { subscriberFormSchema, SubscriberFormSchema } from './schema';
import useOptimisticSubscribers from '@/hooks/useOptimisticSubscribers';

interface Props {
  subscribers: Subscriber[];
}

const AddSubscriberForm = ({ subscribers }: Props) => {
  const { setOptimisticSubscribers } = useOptimisticSubscribers({
    subscribers,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubscriberFormSchema>({
    resolver: zodResolver(subscriberFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const addSubscriber = async (formData: SubscriberFormSchema) => {
    setOptimisticSubscribers({
      action: Action.ADD,
      subscriber: {
        id: String(Math.random()),
        email: formData.email,
        name: formData.name,
        createdAt: new Date(),
      },
    });

    const response = await addSubscriberAction(formData);

    if (response.success) {
      toast.success(response.message);
      reset();
    } else {
      toast.error(response.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(addSubscriber)}
        className="flex justify-center flex-col w-72 my-4 mx-auto"
      >
        <h1 className="mx-auto font-semibold">Subscribe to our newsletter</h1>
        <Input {...register('email')} error={errors.email?.message} placeholder="email" />
        <Input
          {...register('name')}
          error={errors.name?.message}
          placeholder="name"
          className="mt-2"
        />
        <Button label="subscribe" className="mt-2" disabled={isSubmitting} />
      </form>
    </>
  );
};

export default AddSubscriberForm;
