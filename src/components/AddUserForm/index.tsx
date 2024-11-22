'use client';

import { addUser } from '@/utils/actions/userActions';
import Button from '../Button';
import Input from '../Input';
import { Action, ListElement } from '@/types';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userFormSchema, UserFormSchema } from './schema';

interface Props {
  setOptimisticData: (action: { action: Action; user: ListElement }) => void;
}

const AddUserForm = ({ setOptimisticData }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const formAction = handleSubmit(
    async (formData: UserFormSchema) => {
      setOptimisticData({
        action: Action.ADD,
        user: {
          id: String(Math.random()),
          email: formData.email,
          password: formData.password,
          createdAt: new Date(),
        },
      });

      const response = await addUser(formData);

      if (response.success) {
        toast.success(response.message);
        reset();
      } else {
        toast.error(response.message);
      }
    },
    () => {
      Object.values(errors).forEach((value) => toast.error(value.message as string));
    },
  );

  return (
    <>
      <form onSubmit={formAction} className="flex justify-center flex-col w-72 max-w-1/2 m-auto">
        <Input {...register('email')} error={errors.email?.message} placeholder="email" />
        <Input
          {...register('password')}
          error={errors.password?.message}
          placeholder="password"
          className="mt-2"
        />
        <Button label="create user" className="mt-2" disabled={isSubmitting} />
      </form>
    </>
  );
};

export default AddUserForm;
