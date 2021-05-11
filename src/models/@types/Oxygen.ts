import { Document } from "mongoose";

export default interface IOxygen extends Document {
  SupplierContact: string;
  city: string;
  State: string;
  Verified: boolean;
  Price: number;
  VerificationTime: string;
  VerifiedBy: string;
  Delivery: boolean;
}
