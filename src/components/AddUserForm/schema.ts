import { z } from 'zod';
import { emailRegex } from '@/utils/regex/regex';

export const userFormSchema = z.object({
  email: z.string().regex(emailRegex, 'enter a valid email'),
  password: z
    .string({ message: 'enter password' })
    .min(7, { message: 'password must have at least 7 characters' }),
});
export type UserFormSchema = z.infer<typeof userFormSchema>;
