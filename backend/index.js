import dotenv from 'dotenv';
import express from 'express';
import cors from "cors";
import { connectDB } from "./utils/db.js";
import { adminRoute } from './routes/adminRoute.js';
import { normalRoute } from './routes/normalRoute.js';
import path from "path";

dotenv.config();

const app = express();
const __dirname = path.resolve();




app.use(express.json());

const Port = process.env.PORT;

app.listen(Port, () => {
  connectDB();
  console.log(`Server started at: http://localhost:${Port}`);
});
app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true,
}));


app.use("/api/admin", adminRoute);
app.use("/api", normalRoute);

/* if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
} */


