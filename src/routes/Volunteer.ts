import {Router} from "express";
import controllers from "../controllers/Volunteer";
const app=Router();
app.get('/list',controllers.VolunteerList);
export default app;