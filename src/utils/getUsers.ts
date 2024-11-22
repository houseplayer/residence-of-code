import { User } from '@/types';
import prisma from '@/utils/prisma';

export const getUsers = async () => {
  const users: User[] = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } });

  const mappedUsers = users.map((user) => ({
    id: user.id,
    email: user.email,
    password: user.password,
    createdAt: user.createdAt,
  }));

  return mappedUsers;
};
