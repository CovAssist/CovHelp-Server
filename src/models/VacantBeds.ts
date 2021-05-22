import { model, Schema, Model } from "mongoose";
import { IVacantBeds } from "./@types";

const VacantBedsSchema: Schema = new Schema({
  hosContact: String,
  hosName: String,
  hoscity: String,
  state: String,
  verified: Boolean,
  status: Boolean,
  verificationTime: String,
  description: String,
});

const VacantBeds: Model<IVacantBeds> = model("VacantBeds", VacantBedsSchema);
export default VacantBeds;
