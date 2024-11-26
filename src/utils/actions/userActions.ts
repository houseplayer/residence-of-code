'use server';

import { userFormSchema, UserFormSchema } from '@/components/AddUserForm/schema';
import prisma from '../../lib/prisma';
import { revalidatePath } from 'next/cache';
import { validateData } from '../validateData';

export const addUser = async (formData: UserFormSchema) => {
  try {
    validateData(formData, userFormSchema);
    const { email, password } = formData;
    await prisma.user.create({ data: { email, password } });
    return { success: true, message: 'user added' };
  } catch (error) {
    if (String(error.message).includes('Unique constraint failed on the fields: (`email`)')) {
      return { success: false, message: 'user with this email already exist' };
    }
    return { success: false, message: error.message };
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
