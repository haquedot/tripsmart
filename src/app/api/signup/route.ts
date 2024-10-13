import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
  await dbConnect(); // Ensure the database connection is established

  try {
    const { name, email, password } = await req.json();

    // Hash the password with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user and save in the database
    
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    

    // Configure the transporter for nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Sender email
        pass: process.env.EMAIL_PASS, // Sender email password or app password
      },
    });

    // Email content to be sent to the user
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Successfully created an account',
      text: `Hello ${name},\n\nYou have successfully created an account on our platform.`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    // Return success response
    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error during user creation:', error);
    // Return error response
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
