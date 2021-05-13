import { model, Schema, Model } from "mongoose";
import { IVolunteer } from "./@types";

const VolunteerSchema: Schema = new Schema({
  email: String,
  name: String,
  contact: String,
  dob: Date,
  city: String,
  state: String,
  verified: Boolean, //for new registrations
  status: Boolean, //it will be false for the volunteerss who left
});

const User: Model<IVolunteer> = model("Volunteer", VolunteerSchema);
export default User;
