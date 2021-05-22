import { Document } from "mongoose";

export default interface IOxygen extends Document {
  supplierName: string;
  supplierContact: string;
  city: string;
  state: string;
  verified: boolean;
  status: boolean;
  verificationTime: string;
  delivery: boolean;
  description: string;
}
