
import express from "express"
import { login, logout } from "../controllers/NormalController.js";

export const normalRoute = express.Router();


normalRoute.post("/login", login);
normalRoute.post("/logout", logout); 