import { model, Schema, Model } from "mongoose";
import { IAmbulance } from "./@types";

const AmbulanceSchema: Schema = new Schema({
  city: String,
  provider: String,
  contact: String,
  description: String,
  verified: Boolean,
  status: Boolean,
});
const Ambulance: Model<IAmbulance> = model("Ambulance", AmbulanceSchema);
export default Ambulance;
