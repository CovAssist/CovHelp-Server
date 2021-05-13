import {Router} from "express";
import controllers from "../controllers/Oxygen";
const app=Router();
app.get('/list',controllers.OxygenList);
export default app;