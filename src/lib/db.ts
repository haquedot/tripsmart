import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URL || 'your-mongodb-connection-string';

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

// Extend the NodeJS Global interface to include mongoose cache
declare global {
  var mongoose: MongooseCache | undefined;
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// eslint-disable-next-line no-var
var cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
