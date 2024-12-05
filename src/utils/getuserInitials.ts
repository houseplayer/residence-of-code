import { UserProfile } from '@auth0/nextjs-auth0/client';

export const getUserInitials = (user: UserProfile) => {
  return user?.name?.slice(0, 2).toUpperCase();
};
