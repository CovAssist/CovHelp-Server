import { Router } from "express";
import controllers from "../controllers/Medicines";
const app = Router();
app.get("/list", controllers.MedicineList);
app.post("/create", controllers.MedicineCreate);
export default app;
