import { Router } from "express";
import controllers from "../controllers/VacantBeds";
const app = Router();
app.get("/list", controllers.VacantBedsList);
app.post("/create", controllers.VacantBedsCreate);
export default app;
