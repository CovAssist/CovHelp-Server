import {Router} from "express";
import controllers from "../controllers/Donor";
const app=Router();
app.get('/list',controllers.DonorList);
export default app;