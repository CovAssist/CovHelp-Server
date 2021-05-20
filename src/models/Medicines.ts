import { model, Schema, Model } from "mongoose";
import { IMedicines } from "./@types";

const MedicinesSchema: Schema = new Schema({
  medName: String,
  supplierName: String,
  supplierContact: String,
  city: String,
  state: String,
  verified: Boolean,
  status: Boolean,
  price: Number,
  verificationTime: String,
  verifiedBy: String,
  delivery: Boolean,
  description: String,
});

const Medicines: Model<IMedicines> = model("Medicines", MedicinesSchema);
export default Medicines;
