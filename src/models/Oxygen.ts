import { model, Schema, Model } from "mongoose";
import { IOxygen } from "./@types";

const OxygenSchema: Schema = new Schema({
  supplierName:String,
  supplierContact: String,
  city: String,
  state: String,
  verified: Boolean,
  status: Boolean,
  price: Number,
  verificationTime: String,
  verifiedBy: String,
  delivery: Boolean,
});

const Oxygen: Model<IOxygen> = model("Oxygen", OxygenSchema);
export default Oxygen;
