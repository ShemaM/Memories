import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.Connection.host}`);
  } catch (err) {
    console.log(err.message);
  }
};
