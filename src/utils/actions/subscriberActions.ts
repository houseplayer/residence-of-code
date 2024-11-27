'use server';

import {
  subscriberFormSchema,
  SubscriberFormSchema,
} from '@/components/Subscribers/AddSubscriberForm/schema';
import prisma from '../../lib/prisma';
import { revalidatePath } from 'next/cache';
import { validateData } from '../validateData';

export const addSubscriberAction = async (formData: SubscriberFormSchema) => {
  try {
    validateData(formData, subscriberFormSchema);
    const { email, name } = formData;
    await prisma.subscribers.create({ data: { email, name } });
    return { success: true, message: 'subscriber added' };
  } catch (error) {
    if (String(error.message).includes('Unique constraint failed on the fields: (`email`)')) {
      return { success: false, message: 'subscriber with this email already exist' };
    }
    return { success: false, message: error.message };
  } finally {
    revalidatePath('/');
  }
};

export const deleteSubscriberAction = async (id: string) => {
  try {
    await prisma.subscribers.delete({ where: { id: id } });
    return { success: true, message: 'subscriber deleted' };
  } catch (error) {
    return { success: false, message: 'Delete subscriber failed. Please try again' };
  } finally {
    revalidatePath('/');
  }
};
