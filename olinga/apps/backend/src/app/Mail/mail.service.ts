import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  async sendAdminNotification(subject: string, message: string): Promise<void> {
    const mailOptions = {
      from: `"Olinga" <${process.env.MAIL_FROM}>`,
      to: process.env.ADMIN_EMAIL,
      subject,
      text: message,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
