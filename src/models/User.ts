// models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  otp: string;
  otpExpiry: Date;
  isVerified: boolean;
}

const UserSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  otp: {
    type: String,
    // required: true,
  },
  otpExpiry: {
    type: Date,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
