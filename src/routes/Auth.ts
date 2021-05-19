import { Router } from "express";
import controllers from "../controllers/Auth";
const app = Router();
app.post("/login", controllers.Login);
app.get("/logout", controllers.Logout);
app.get("/checkauth", controllers.CheckAuth);
app.post("/createauth", controllers.CreateCreds);
export default app;
