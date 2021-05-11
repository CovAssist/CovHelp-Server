import { model, Schema, Model } from "mongoose";
import { IVolunteer } from "./@types";

const VolunteerSchema: Schema = new Schema({
  email: String,
  name: String,
  contact: String,
  dob: Date,
  city: String,
  state: String,
  verified: Boolean,
});

const User: Model<IVolunteer> = model("Volunteer", VolunteerSchema);
export default User;
