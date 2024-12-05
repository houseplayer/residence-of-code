'use server';

import { sendEmailSchema, SendEmailSchema } from '@/components/EmailForm/schema';
import { validateData } from '@/utils/validateData';
import { transporter } from '../../lib/nodemailer';
import { getSubscribersEmails } from '@/utils/getSubscribers';

export const sendEmailAction = async (formData: SendEmailSchema) => {
  try {
    validateData(formData, sendEmailSchema);
    const subscribers = await getSubscribersEmails();

    await transporter.sendMail({
      to: subscribers,
      subject: formData.title,
      text: formData.content,
    });
    return { success: true, message: 'email sent successfully' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
