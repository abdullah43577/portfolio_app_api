"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = exports.api_test = void 0;
const { transportMail } = require('./nodemailer/nodemailer');
const api_test = (req, res) => {
    res.status(200).json({ message: 'Welcome to the API server!' });
};
exports.api_test = api_test;
const sendMail = async (req, res) => {
    try {
        const formData = req.body;
        if (hasEmptyStrings(formData))
            return res.status(400).json({ message: 'Empty fields not allowed!' });
        const mailer = await transportMail(formData);
        res.status(200).json({ message: 'Mail sent successfully!', messageId: mailer.messageId });
    }
    catch (error) {
        res.status(500).json({ error: 'Mail not sent!', message: error });
    }
};
exports.sendMail = sendMail;
function hasEmptyStrings(obj) {
    return Object.values(obj).some((value) => value === '');
}
