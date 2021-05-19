import { Router } from "express";
import controllers from "../controllers/Medicines";
import middleware from "./middleware";
const app = Router();
app.get("/list", controllers.MedicineList);
app.post("/create", middleware, controllers.MedicineCreate);
app.post("/changestatus", middleware, controllers.ChangeStatus);
export default app;
