import {Router} from "express";
import controllers from "../controllers/VacantBeds";
const app=Router();
app.get('/list',controllers.VacantBedsList);
export default app;