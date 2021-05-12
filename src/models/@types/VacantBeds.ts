import { Document } from "mongoose";

export default interface IVacantBeds extends Document {
  VacantBeds: number;
  HosContact: string;
  HosName: string;
  Hoscity: string;
  State: string;
  Verified: boolean;
  HosFees: number;
  VerificationTime: string;
  VerifiedBy: string;
}
