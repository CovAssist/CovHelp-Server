import { Document } from "mongoose";
export default interface IVolunteer extends Document {
  email: string;
  age: string;
  gender: string;
  contact: string;
  name: string;
  city: string;
  state: string;
  verified: boolean;
  status: boolean;
  description: string;
}
