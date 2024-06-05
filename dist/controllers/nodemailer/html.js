"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHtml = void 0;
const getHtml = function (formData) {
    const date = new Date().getFullYear();
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding: 10px 0;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          color: #333333;
        }
        .content {
          padding: 20px;
        }
        .content h2 {
          font-size: 20px;
          color: #333333;
        }
        .content p {
          font-size: 16px;
          color: #666666;
          line-height: 1.5;
        }
        .footer {
          text-align: center;
          padding: 10px;
          font-size: 14px;
          color: #999999;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>ReactMode</h1>
        </div>

        <div class="content">
          <h2>Hello Abdullah,</h2>
          <p>We are excited to share some news with you!</p>
          <p>We have a new job alert for you. Please check the details below:</p>
          <p><strong>Full Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
          <p><strong>Budget:</strong> ${formData.budget}</p>
          <p>If you are interested, please reply to this email as soon as you get this</p>
          <p>Best regards,<br/>The Development Team</p>
        </div>

        <div class="footer">
          <p>&copy; ${date} <ReactMode />. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>`;
};
exports.getHtml = getHtml;
