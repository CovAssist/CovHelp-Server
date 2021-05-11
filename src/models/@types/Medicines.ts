import { Document } from "mongoose";

export default interface IMedicines extends Document {
  Name: string;
  SupplierContact: string;
  city: string;
  State: string;
  Verified: boolean;
  Price: number;
  VerificationTime: string;
  VerifiedBy: string;
  Delivery: boolean;
}
