
import express from "express"
import { login, logout } from "../controllers/NormalController.js";

export const normalRoute = express.Router();


defaultroute.post("/login", login);
defaultroute.post("/logout", logout); 