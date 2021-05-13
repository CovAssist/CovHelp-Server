import { Router } from "express";
import controllers from "../controllers/Volunteer";
const app = Router();
app.get("/list", controllers.VolunteerList);
app.post("/changestatus", controllers.ChangeStatus);
export default app;
