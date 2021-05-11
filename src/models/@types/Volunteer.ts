import { Document } from "mongoose";
export default interface IVolunteer extends Document {
  email: string;
  dob: Date;
  contact: String;
  name: String;
  city: String;
  state: String;
  verified: Boolean;
}
