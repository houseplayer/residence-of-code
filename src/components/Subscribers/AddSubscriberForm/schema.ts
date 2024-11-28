import { z } from 'zod';
import { emailRegex } from '@/utils/regex';

export const subscriberFormSchema = z.object({
  email: z.string().regex(emailRegex, 'enter a valid email'),
  name: z.string().min(1, 'enter your name'),
});
export type SubscriberFormSchema = z.infer<typeof subscriberFormSchema>;
