import { Document } from "mongoose";

export default interface IVacantBeds extends Document {
  numOfBeds: number;
  hosContact: string;
  hosName: string;
  hoscity: string;
  state: string;
  verified: boolean;
  hosFees: number;
  verificationTime: string;
  verifiedBy: string;
}
