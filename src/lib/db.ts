import mongoose from "mongoose";

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    // Already connected or connecting
    console.log("Using existing database connection");
    return;
  }

  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI environment variable is not set");
    }

    await mongoose.connect(mongoUri, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log("Database connected");

    mongoose.connection.on('error', (error) => {
      console.error("Error connecting to the database", error);
      process.exit(1); // Force exit on critical DB errors
    });
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1); // Exit if connection fails
  }
}
