'use client';

import { routes } from '@/utils/enums';
import { getUserInitials } from '@/utils/getuserInitials';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

const UserIcon = () => {
  const { user } = useUser();

  if (!user) {
    return;
  }

  const userInitials = getUserInitials(user);

  return (
    <Link
      href={routes.user}
      className="w-[40px] h-[40px] bg-blue-800 text-white rounded-full inline-flex justify-center items-center"
    >
      {userInitials}
    </Link>
  );
};

export default UserIcon;
