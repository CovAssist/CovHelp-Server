import { Document } from "mongoose";

export default interface IPatient extends Document {
  email: string;
  dob: string;
  contact: string;
  name: string;
  hospitalcity: string;
  state: string;
  hospital: string;
  verified: boolean;
  report: string;
}
