import { Router } from "express";
import Volunteer from "./Volunteer";
import Oxygen from "./Oxygen";
import Donor from "./Donor";
import VacantBeds from "./VacantBeds";
import Medicines from "./Medicines";
import Patient from "./Patient";
import Auth from "./Auth";

const app = Router();

app.use("/volunteer", Volunteer);
app.use("/donor", Donor);
app.use("/oxygen", Oxygen);
app.use("/beds", VacantBeds);
app.use("/medicine", Medicines);
app.use("/patient", Patient);
app.use("/auth", Auth);
export default app;
