import mongoose from "mongoose";

export async function dbConnect(){
  try{
    mongoose.connect(process.env.MONGO_URI!)

  const connection =  mongoose.connection;

  connection.on('connected', () => {
    console.log("Database connected");
  });

  connection.on('error', (error) => {
    console.error("Error connecting to database", error);
    process.exit();
  });

  }catch(error){
    console.error("Error connecting to database", error);
    console.log(error);
  }
}