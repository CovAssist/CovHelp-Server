import { model, Schema, Model } from "mongoose";
import { IOxygen } from "./@types";

const OxygenSchema: Schema = new Schema({
  SupplierContact: String,
  city: String,
  State: String,
  Verified: Boolean,
  Status: Boolean,
  Price: Number,
  VerificationTime: String,
  VerifiedBy: String,
  Delivery: Boolean,
});

const Oxygen: Model<IOxygen> = model("Oxygen", OxygenSchema);
export default Oxygen;
