'use client';

import { sendEmailAction } from '@/utils/actions/emailActions';
import Button from '../Button';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SendEmailSchema, sendEmailSchema } from './schema';
import Input from '../Input';
import TextArea from '../TextArea';
import { clsx } from 'clsx';

interface Props {
  className?: string;
}

const EmailForm = ({ className }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SendEmailSchema>({
    resolver: zodResolver(sendEmailSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const sendEmail = async (formData: SendEmailSchema) => {
    const response = await sendEmailAction(formData);

    if (response.success) {
      toast.success(response.message);
      reset();
    } else {
      toast.error(response.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className={clsx(className, 'flex flex-col mx-auto my-4')}
    >
      <h1 className="mx-auto font-semibold">Send email to subscribers</h1>
      <Input {...register('title')} error={errors.title?.message} placeholder="title" />
      <TextArea {...register('content')} error={errors.content?.message} placeholder="content" />
      <Button label="send email" disabled={isSubmitting} disabledLabel="sending..." />
    </form>
  );
};

export default EmailForm;
