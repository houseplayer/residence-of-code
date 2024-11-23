'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

const UserInfo = () => {
  const { user } = useUser();

  return (
    user && (
      <>
        <p> {user.name}</p>
        <p> {user.nickname}</p>
        <p> {user.updated_at}</p>
      </>
    )
  );
};

export default UserInfo;
