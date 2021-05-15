import { model, Schema, Model } from "mongoose";
import { IVacantBeds } from "./@types";

const VacantBedsSchema: Schema = new Schema({
  numOfBeds: Number,
  hosContact: String,
  hosName: String,
  hoscity: String,
  state: String,
  verified: Boolean,
  status: Boolean,
  hosFees: Number,
  verificationTime: String,
  verifiedBy: String,
});

const VacantBeds: Model<IVacantBeds> = model("VacantBeds", VacantBedsSchema);
export default VacantBeds;
