import {Router} from "express";
import controllers from "../controllers/Medicines";
const app=Router();
app.get('/list',controllers.MedicineList);
export default app;