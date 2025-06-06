import dotenv from 'dotenv';
import express from 'express';
import cors from "cors";
import { adminRoute } from './routes/adminRoute.js';
import { normalRoute } from './routes/normalRoute.js';
import { connectDB } from './utils/db.js';

dotenv.config();

const app = express();

app.use(express.json());

const Port = process.env.PORT||8000;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));


app.use("/api/admin", adminRoute);
app.use("/api", normalRoute);

app.listen(Port, () => {
  connectDB();
  console.log(`Server started at: http://localhost:${Port}`);
});


