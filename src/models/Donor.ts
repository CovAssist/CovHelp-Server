import { model, Schema, Model } from "mongoose";
import { IDonor } from "./@types";

const DonorSchema: Schema = new Schema({
  age: Number,
  contact: String,
  name: String,
  city: String,
  state: String,
  recovered: Number,
  blood: String,
  date: Date,
  lastDonation: String, //days or months since last donation
  description: String,
});

const Donor: Model<IDonor> = model("Donor", DonorSchema);
export default Donor;
