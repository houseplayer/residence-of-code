'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GOOGLE_USER,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export const sendEmailAction = async () => {
  try {
    await transporter.sendMail({
      from: '"Your true master 👻" <houseplayer@gmail.com>',
      to: 'lukasz.szymczyk@gmail.com',
      subject: 'test3',
      text: 'test3',
      html: '<h1>test3<h1/>',
    });
    return { success: true, message: 'email sent successfully' };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'sending email failed' };
  }
};
