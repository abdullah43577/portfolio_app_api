const { transportMail } = require('./nodemailer/nodemailer');
import { Request, Response } from 'express';

const api_test = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to the API server!' });
};

const sendMail = async (req: Request, res: Response) => {
  try {
    const formData = req.body;
    if (!formData) return res.status(400).json({ message: 'No data provided!' });
    const mailer = await transportMail(formData);
    res.status(200).json({ message: 'Mail sent successfully!', messageId: mailer.messageId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Mail not sent!', message: error });
  }
};

export { api_test, sendMail };
