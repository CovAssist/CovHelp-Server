import { Router } from "express";
import controllers from "../controllers/Patient";
import middleware from "./middleware";
const app = Router();
app.get("/list", controllers.PatientList);
app.post("/create", controllers.PatientCreate);
app.post("/changestatus", middleware, controllers.ChangeStatus);
app.post("/update", controllers.PatientUpdate);
export default app;
