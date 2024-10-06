import mongoose from "mongoose";

export default async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
      const connection =  mongoose.connection

      connection.on('connected', () => {
        console.log('Database connected')
      })

      connection.on('error', (error) => {
        console.error('Database connection failed', error);
        process.exit();
      })

    }
    catch (error) {
        console.error("Something went wrong with the database connection", error);
    }
}