import { Document } from "mongoose";

export default interface IPatient extends Document {
  email: string;
  dob: string;
  contact: string;
  name: string;
  Hospitalcity: string;
  Hospital: string;
  Verified: boolean;
  Report: string;
}
