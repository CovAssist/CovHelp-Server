import { Document } from "mongoose";
export default interface IAmbulance extends Document {
  city: string;
  provider: string;
  contact: string;
  description: string;
  verified: boolean;
  status: boolean;
}
