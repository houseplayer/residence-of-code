import { User } from '@/types';
import prisma from '@/utils/prisma';

export const getUsers = async () => {
  const users: User[] = await prisma.user.findMany();

  const mappedUsers = users.map((user) => ({
    id: user.id,
    text: user.email,
    createdAt: user.createdAt,
  }));

  return mappedUsers;
};
