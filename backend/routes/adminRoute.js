import express from "express";
import multer from "multer";
import { createEmployee, deleteEmployee, editEmployee, getAllEmployee, } from "../controllers/employeeController.js";
import { validateEditFile, validateFile } from "../middlewares/fileValidator.js";

const upload = multer({ storage: multer.memoryStorage() });

export const adminRoute = express.Router();

adminRoute.post("/createEmp", upload.single("image"), validateFile, createEmployee);

adminRoute.get("/getAllEmp", getAllEmployee);

adminRoute.post("/editEmp/:id", upload.single("image"), validateEditFile, editEmployee);
adminRoute.delete("/deleteEmp/:id", deleteEmployee);
