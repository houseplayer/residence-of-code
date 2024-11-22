import { z } from 'zod';
import { emailRegex, passwordRegex } from '@/utils/regex/regex';

export const userFormSchema = z.object({
  email: z.string().regex(emailRegex, 'enter a valid email'),
  password: z
    .string({ message: 'enter password' })
    .regex(
      new RegExp(passwordRegex),
      'password must contain at least one letter, digit and special character',
    )
    .min(7, 'password must have at least 7 characters'),
});
export type UserFormSchema = z.infer<typeof userFormSchema>;
