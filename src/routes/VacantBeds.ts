import { Router } from "express";
import controllers from "../controllers/VacantBeds";
import middleware from "./middleware";
const app = Router();
app.get("/list", controllers.VacantBedsList);
app.post("/create", middleware, controllers.VacantBedsCreate);
app.post("/changestatus", middleware, controllers.ChangeStatus);
export default app;
