import { NextResponse } from 'next/server';
import Trip from '@/models/Trip';
import jwt from 'jsonwebtoken';
import User from '@/models/User';
import { dbConnect } from '@/lib/db';

// Helper function to verify JWT
async function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decoded;
  } catch (error) {
    return null;
  }
}

// GET all trips for the current user
export async function GET(request: Request) {
  try {
    await dbConnect();
    
    // Get token from cookies
    const cookieHeader = request.headers.get('cookie');
    const tokenCookie = cookieHeader?.split(';').find(c => c.trim().startsWith('token='));
    const token = tokenCookie?.split('=')[1];
    
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized - No token provided' },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid token' },
        { status: 401 }
      );
    }

    // Find user
    if (typeof decoded !== 'object' || !('id' in decoded)) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid token payload' },
        { status: 401 }
      );
    }
    const user = await User.findById(typeof decoded === 'object' && 'id' in decoded ? decoded.id : undefined);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Get trips for this user
    const trips = await Trip.find({ userId: user._id })
      .sort({ createdAt: -1 });

    return NextResponse.json(trips);
  } catch (error) {
    console.error('Error fetching trips:', error);
    return NextResponse.json(
      { error: 'Failed to fetch trips' },
      { status: 500 }
    );
  }
}

// POST a new trip for the current user
export async function POST(request: Request) {
  try {
    await dbConnect();
    
    // Get token from cookies
    const cookieHeader = request.headers.get('cookie');
    const tokenCookie = cookieHeader?.split(';').find(c => c.trim().startsWith('token='));
    const token = tokenCookie?.split('=')[1];
    
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized - No token provided' },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid token' },
        { status: 401 }
      );
    }

    // Find user
    const user = await User.findById(typeof decoded === 'object' && 'id' in decoded ? decoded.id : undefined);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    
    // Validation
    if (!body.tripName || !body.destination || !body.startDate || !body.endDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (new Date(body.endDate) <= new Date(body.startDate)) {
      return NextResponse.json(
        { error: 'End date must be after start date' },
        { status: 400 }
      );
    }

    const newTrip = new Trip({
      ...body,
      userId: user._id
    });

    await newTrip.save();

    return NextResponse.json(newTrip, { status: 201 });
  } catch (error) {
    console.error('Error creating trip:', error);
    return NextResponse.json(
      { error: 'Failed to create trip' },
      { status: 500 }
    );
  }
}