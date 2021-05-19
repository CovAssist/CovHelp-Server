import { model, Schema, Model } from "mongoose";
import { IUserAuth } from "./@types";
const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  volId: { type: String, required: true },
  admin: Boolean,
});
const UserAuth: Model<IUserAuth> = model("UserAuth", UserSchema);
export default UserAuth;
