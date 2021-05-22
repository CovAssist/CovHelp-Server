import { Document } from "mongoose";
export default interface IDonor extends Document {
  age: number;
  contact: string;
  name: string;
  city: string;
  state: string;
  recovered: number;
  blood: string;
  date: string;
  lastDonation: string;
  description: string;
}
