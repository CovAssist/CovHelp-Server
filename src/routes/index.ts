import {Router} from "express";

import Volunteer from "./Volunteer";

const app=Router();

app.use("/volunteer",Volunteer);
export default app;