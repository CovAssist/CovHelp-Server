import { model, Schema, Model } from "mongoose";
import { IPatient } from "./@types";

const PatientSchema: Schema = new Schema({
  bloodGroup: String,
  requirement: String,
  oxygenLevel: String,
  attenderName: String,
  volunteerAssigned: String,
  followUp: String,
  remarks: String,
  age: Number,
  contact: String,
  name: String,
  hospitalcity: String,
  state: String,
  hospital: String,
  verified: Boolean,
  status: Boolean,
  report: String,
  description: String,
});

const Patient: Model<IPatient> = model("Patient", PatientSchema);
export default Patient;
