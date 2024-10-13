import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
    await dbConnect(); // Ensure the database connection is established

    try {
        // Parse the request body to get email and password
        const { email, password } = await req.json();

        console.log('email:', email);
        console.log('password:', password);
        // Ensure email and password exist
        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { message: 'User not found' },
                { status: 404 }
            );
        }

        // Ensure the password exists in the user object
        if (!user.password) {
            return NextResponse.json(
                { message: 'User password not found' },
                { status: 500 }
            );
        }

        // Compare the password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Create a JWT token
        const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET!, {
            expiresIn: '1h',
        });

        // Return the token
        return NextResponse.json({ token }, { status: 200 });

    } catch (error) {
        console.error('Error during login:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
