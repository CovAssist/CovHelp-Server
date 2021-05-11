import { Document } from "mongoose";

export default interface IVacantBeds extends Document {
  VacantBeds: number;
  HospitalContact: string;
  HospitalName: string;
  Hospitalcity: string;
  State: string;
  Verified: boolean;
  HospitalFees: number;
  VerificationTime: string;
  VerifiedBy: string;
}
