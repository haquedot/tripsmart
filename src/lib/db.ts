import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URL || 'your-mongodb-connection-string';

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

async function connectDB() {
  try {
    // Check if the connection is already open
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection;
    }
    
    // If not, establish a new connection
    const connection = await mongoose.connect(MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB');
    return connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default connectDB;
