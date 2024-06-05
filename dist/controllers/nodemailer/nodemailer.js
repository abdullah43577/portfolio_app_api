"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportMail = void 0;
require("dotenv/config");
const nodemailer_1 = __importDefault(require("nodemailer"));
const html_1 = require("./html");
const { EMAIL, PASSWORD } = process.env;
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: EMAIL,
        pass: PASSWORD,
    },
});
async function transportMail(formData) {
    try {
        const info = await transporter.sendMail({
            from: `<${formData.firstName} /> 👻" <${formData.email}>`,
            to: 'officialayo540@gmail.com',
            subject: 'Job Alert! ✅',
            html: (0, html_1.getHtml)(formData),
        });
        return info;
    }
    catch (error) {
        throw error;
    }
}
exports.transportMail = transportMail;
