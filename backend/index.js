import dotenv from 'dotenv';
import express from 'express';
import cors from "cors";
import { connectDB } from "./utils/db.js";
import { adminRoute } from './routes/adminRoute.js';
import { normalRoute } from './routes/normalRoute.js';

import path from "path";

const app = express();
const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Port = process.env.PORT || 8000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));



app.use("/api/admin", adminRoute);
app.use("/api", normalRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(Port, () => {
  connectDB();
  console.log(`Server started at: http://localhost:${Port}`);
});

