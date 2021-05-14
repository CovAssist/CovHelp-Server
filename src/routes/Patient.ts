import { Router } from "express";
import controllers from "../controllers/Patient";
const app = Router();
app.get("/list", controllers.PatientList);
app.post("/create", controllers.PatientCreate);
export default app;
