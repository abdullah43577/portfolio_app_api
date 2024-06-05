import 'dotenv/config';
import nodemailer from 'nodemailer';
import { getHtml } from './html';
import { Email } from '../../types';
const { EMAIL, PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

export async function transportMail(formData: Email) {
  try {
    const info = await transporter.sendMail({
      from: `<${formData.firstName} /> 👻" <${formData.email}>`,
      to: 'officialayo540@gmail.com',
      subject: 'Job Alert! ✅',
      html: getHtml(formData),
    });

    return info;
  } catch (error) {
    throw error;
  }
}
