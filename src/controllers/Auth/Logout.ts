import { Request } from "express";
import { AppResponse } from "../../@types";
export default async (req: Request, res: AppResponse) => {
  return res
    .clearCookie("token")
    .status(200)
    .json({ success: true, message: "logout success" });
};
