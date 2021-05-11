import { Document } from "mongoose";
export default interface IVolunteer extends Document {
  email: string;
  dob: string;
  contact: string;
  name: string;
  city: string;
  state: string;
  verified: boolean;
}
