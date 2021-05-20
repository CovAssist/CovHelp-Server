import { Document } from "mongoose";

export default interface IPatient extends Document {
  bloodGroup: string;
  requirement: string;
  oxygenLevel: string;
  attenderName: string;
  volunteerAssigned: string;
  followUp: string;
  remarks: string;
  age: number;
  contact: string;
  name: string;
  hospitalcity: string;
  state: string;
  hospital: string;
  verified: boolean;
  status: boolean;
  report: string;
  description: string;
}
