'use server';

import { UserFormSchema } from '@/components/AddUserForm/schema';
import prisma from '../../utils/prisma';
import { revalidatePath } from 'next/cache';

export const addUser = async (formData: UserFormSchema) => {
  try {
    const { email, password } = formData;
    await prisma.user.create({ data: { email, password } });
    return { success: true, message: 'user added' };
  } catch (error) {
    let message = 'Create user failed. Please try again';

    if (String(error.message).includes('Unique constraint failed on the fields: (`email`)')) {
      message = 'user with this email already exist';
    }

    return { success: false, message };
  } finally {
    revalidatePath('/');
  }
};

export const deleteUser = async (id: string) => {
  try {
    await prisma.user.delete({ where: { id: id } });
    return { success: true, message: 'user deleted' };
  } catch (error) {
    return { success: false, message: 'Delete user failed. Please try again' };
  } finally {
    revalidatePath('/');
  }
};
