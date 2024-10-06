import User from '@/models/userModel';
import nodemailer from 'nodemailer';
import bcryptjs from "bcryptjs";

// Define the types for the function arguments
interface SendEmailArgs {
  email: string;
  emailType: 'VERIFY' | 'RESET'; // restrict to valid email types
  userId: string | number; // userId can be a string or a number
}

export const sendEmail = async ({ email, emailType, userId }: SendEmailArgs) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === 'VERIFY') {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyExpire: Date.now() + 3600000, // 1 hour expiry
      });
    } else if (emailType === 'RESET') {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordExpire: Date.now() + 3600000, // 1 hour expiry
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "48a1d6fbee0766",
        pass: "78359bedfffdeb",
      },
    });

    const mailOptions = {
      from: 'haquedot@gmail.com',
      to: email,
      subject: emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',
      html: `
        <p>
          Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === 'VERIFY' ? 'verify your email' : 'reset your password'
      } or copy and paste the link below in your browser.
          <br/>
          ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
        </p>
      `,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    console.error('Error sending email', error);
  }
};
