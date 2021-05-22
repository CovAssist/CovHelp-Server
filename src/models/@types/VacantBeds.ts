import { Document } from "mongoose";

export default interface IVacantBeds extends Document {
  hosContact: string;
  hosName: string;
  hoscity: string;
  state: string;
  verified: boolean;
  status: boolean;
  verificationTime: string;
  description: string;
}
