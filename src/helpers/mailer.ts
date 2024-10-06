import User from '@/models/userModel';
import nodemailer from 'nodemailer';
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {

    try {

        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId,
                {
                    verifyToken: hashedToken,
                    verifyExpire: Date.now() + 3600000
                }
            )
        } else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId,
                {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordExpire: Date.now() + 3600000
                }
            )
        }


        // Looking to send emails in production? Check out our Email API/SMTP product!
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "48a1d6fbee0766",
                pass: "78359bedfffdeb"
            }
        });


        const mailOptions = {
            from: 'haquedot@gmail.com',
            to: email,
            subject: emailType === 'VERIFY' ? 'Verify your email' : "Reset your password",
            html: `
            <p>
                Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === 'VERIFY' ? 'verify your email' : "reset your password"}
                or copy and paste the link below in your browser.
                <br/>
                ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>
            `,
        }


        const mailResponse = await transport.sendMail(mailOptions);

        return mailResponse;

    } catch (error) {
        console.error('Error sending email', error);
    }
}