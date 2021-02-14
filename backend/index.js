import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db';
import routes from './routes/Posts';

config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', routes);

const { PORT } = process.env;

app.listen(PORT, console.log(`server running at port ${PORT}`));
