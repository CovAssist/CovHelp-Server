import { Document } from "mongoose";

export default interface IOxygen extends Document {
  supplierName:string;
  supplierContact: string;
  city: string;
  state: string;
  verified: boolean;
  status: boolean;
  price: number;
  verificationTime: string;
  verifiedBy: string;
  delivery: boolean;
}
