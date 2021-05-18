import { Router } from "express";
import controllers from "../controllers/Oxygen";
import middleware from "./middleware";
const app = Router();
app.get("/list", controllers.OxygenList);
app.post("/create", middleware, controllers.OxygenCreate);
app.post("/changestatus", middleware, controllers.ChangeStatus);
export default app;
