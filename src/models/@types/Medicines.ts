import { Document } from "mongoose";

export default interface IMedicines extends Document {
  name: string;
  supplierContact: string;
  city: string;
  state: string;
  verified: boolean;
  price: number;
  verificationTime: string;
  verifiedBy: string;
  delivery: boolean;
}
