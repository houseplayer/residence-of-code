'use server';

import { sendEmailSchema, SendEmailSchema } from '@/components/emailForm/schema';
import { validateData } from '../validateData';
import { transporter } from '../../lib/nodemailer';

export const sendEmailAction = async (formData: SendEmailSchema) => {
  try {
    validateData(formData, sendEmailSchema);

    await transporter.sendMail({
      to: formData.recipient,
      subject: formData.title,
      text: formData.content,
    });
    return { success: true, message: 'email sent successfully' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
