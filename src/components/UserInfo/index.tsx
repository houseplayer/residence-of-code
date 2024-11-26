'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Button from '../Button';
import { sendEmailAction } from '@/utils/actions/emailActions';
import toast from 'react-hot-toast';

const UserInfo = () => {
  const { user } = useUser();

  const sendEmail = async () => {
    const response = await sendEmailAction();

    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return (
    user && (
      <div className="flex justify-center flex-col w-72 max-w-1/2 m-auto mt-4 border-1 px-3 py-2">
        <p> {user.name}</p>
        <p> {user.nickname}</p>
        <p> {user.updated_at}</p>
        <form action={sendEmail}>
          <Button label="send email" />
        </form>
      </div>
    )
  );
};

export default UserInfo;
