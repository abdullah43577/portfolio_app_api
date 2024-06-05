const { transportMail } = require('./nodemailer/nodemailer');
import { Request, Response } from 'express';

const api_test = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to the API server!' });
};

const sendMail = async (req: Request, res: Response) => {
  try {
    const formData = req.body;
    const mailer = await transportMail(formData);
    res.status(200).json({ message: 'Mail sent successfully!', messageId: mailer.messageId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Mail not sent!' });
  }
};

export { api_test, sendMail };
