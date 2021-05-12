import {Router} from "express";
import Volunteer from "./Volunteer";
import Oxygen from "./Oxygen" 
import Donor from "./Donor"
import VacantBeds from "./VacantBeds";
const app=Router();

app.use("/volunteer",Volunteer);
app.use("/donor",Donor)
app.use("/oxygen",Oxygen)
app.use("/vacantbeds",VacantBeds)
export default app;