import { Document } from "mongoose";

export default interface IMedicines extends Document {
  medName: string;
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
