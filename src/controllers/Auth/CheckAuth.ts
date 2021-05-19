import { Request } from "express";
import { AppResponse } from "../../@types";
import jwt from "jsonwebtoken";
export default async (req: Request, res: AppResponse) => {
  if (!req.cookies.token) {
    return res.status(200).json({ error: true, message: "Login to continue" });
  }
  try {
    const token = jwt.verify(
      req.cookies.token,
      process.env.SECRET_TOKEN_KEY as string
    );
    if (token) {
      return res.status(200).json({ success: true, message: "Token Verified" });
    }
    return res.status(401).json({ error: true, message: "Token invalid" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};
