import { Router } from "express";
import controllers from "../controllers/Oxygen";
const app = Router();
app.get("/list", controllers.OxygenList);
app.post("/create", controllers.OxygenCreate);
export default app;
