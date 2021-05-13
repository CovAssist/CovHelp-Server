import { Document } from "mongoose";
export default interface IDonor extends Document {
  email: string;
  dob: string;
  contact: string;
  name: string;
  city: string;
  state: string;
  recovered: number;
  blood: string;
  date: string;
}
