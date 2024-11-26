import { z } from 'zod';
import { emailRegex } from '@/utils/regex/regex';

export const sendEmailSchema = z.object({
  recipient: z.string().regex(emailRegex, 'enter a valid email'),
  title: z.string().min(1, 'enter email title'),
  content: z.string().min(1, 'enter email content'),
});
export type SendEmailSchema = z.infer<typeof sendEmailSchema>;
