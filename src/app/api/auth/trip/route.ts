// app/api/trips/route.ts
import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb';
import Trip, { ITrip } from '@/app/models/Trip';

interface TripRequestBody {
  userId: string;
  title: string;
  destination: string;
  startDate: string | Date;
  endDate: string | Date;
  transportation?: 'car' | 'train' | 'bus' | 'flight' | 'other';
  accommodation?: string;
  budget?: number;
  activities?: Array<{
    name: string;
    date: string | Date;
    location: string;
    notes: string;
  }>;
  notes?: string;
}

// Create a new trip
export async function POST(request: Request) {
  try {
    await connectToDatabase();
    
    const body: TripRequestBody = await request.json();
    
    // Validate required fields
    if (!body.userId || !body.title || !body.destination || !body.startDate || !body.endDate) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create new trip
    const newTrip = new Trip({
      userId: body.userId,
      title: body.title,
      destination: body.destination,
      startDate: new Date(body.startDate),
      endDate: new Date(body.endDate),
      transportation: body.transportation || 'other',
      accommodation: body.accommodation || '',
      budget: body.budget || 0,
      activities: body.activities?.map(activity => ({
        ...activity,
        date: new Date(activity.date)
      })) || [],
      notes: body.notes || '',
    });
    
    const savedTrip: ITrip = await newTrip.save();
    
    return NextResponse.json(
      { message: 'Trip created successfully', trip: savedTrip },
      { status: 201 }
    );
    
  } catch (error: unknown) {
    console.error('Error creating trip:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { message: 'Failed to create trip', error: errorMessage },
      { status: 500 }
    );
  }
}

// Get all trips for a user
export async function GET(request: Request) {
  try {
    await connectToDatabase();
    
    // Get userId from query parameter
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      );
    }
    
    const trips: ITrip[] = await Trip.find({ userId }).sort({ createdAt: -1 });
    
    return NextResponse.json({ trips }, { status: 200 });
    
  } catch (error: unknown) {
    console.error('Error fetching trips:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { message: 'Failed to fetch trips', error: errorMessage },
      { status: 500 }
    );
  }
}