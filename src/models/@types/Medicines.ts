import { Document } from "mongoose";

export default interface IMedicines extends Document {
  medName: string;
  supplierName: string;
  supplierContact: string;
  city: string;
  state: string;
  verified: boolean;
  status: boolean;
  price: number;
  verificationTime: string;
  verifiedBy: string;
  delivery: boolean;
  description: string;
}
