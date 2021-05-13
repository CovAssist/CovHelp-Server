import {Router} from "express";
import Volunteer from "./Volunteer";
import Oxygen from "./Oxygen" 
import Donor from "./Donor"
import VacantBeds from "./VacantBeds";
import Medicines from "./Medicines";
import Patient from "./Patient"

const app=Router();

app.use("/volunteer",Volunteer);
app.use("/donor",Donor)
app.use("/oxygen",Oxygen)
app.use("/vacantbeds",VacantBeds)
app.use("/medicines",Medicines)
app.use("/patient",Patient)
export default app;