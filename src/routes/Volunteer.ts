import { Router } from "express";
import controllers from "../controllers/Volunteer";
import middleware from "./middleware";
const app = Router();
app.get("/list", controllers.VolunteerList);
app.post("/changestatus", middleware, controllers.ChangeStatus);
app.post("/create", controllers.VolunteerCreate);
export default app;
