// app/models/Trip.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IActivity {
  name: string;
  date: Date;
  location: string;
  notes: string;
}

interface ITrip extends Document {
  userId: string;
  title: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  transportation: 'car' | 'train' | 'bus' | 'flight' | 'other';
  accommodation: string;
  budget: number;
  activities: IActivity[];
  notes: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TripSchema: Schema<ITrip> = new Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  destination: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  transportation: {
    type: String,
    enum: ['car', 'train', 'bus', 'flight', 'other'],
    default: 'other',
  },
  accommodation: {
    type: String,
    default: '',
  },
  budget: {
    type: Number,
    default: 0,
  },
  activities: [{
    name: String,
    date: Date,
    location: String,
    notes: String
  }],
  notes: {
    type: String,
    default: '',
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

const Trip = mongoose.models.Trip || mongoose.model<ITrip>('Trip', TripSchema);

export default Trip;