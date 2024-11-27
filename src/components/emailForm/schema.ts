import { z } from 'zod';

export const sendEmailSchema = z.object({
  title: z.string().min(1, 'enter email title'),
  content: z.string().min(1, 'enter email content'),
});
export type SendEmailSchema = z.infer<typeof sendEmailSchema>;
