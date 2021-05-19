import { Request } from "express";
import { AppResponse } from "../../@types";
import { UserAuth, IUserAuth } from "../../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export default async (req: Request, res: AppResponse) => {
  console.log(req.body);

  if (!req.body.username || !req.body.password) {
    return res
      .status(400)
      .json({ error: true, message: "Empty Username or Password" });
  }
  try {
    const user = await UserAuth.findOne({ username: req.body.username });
    if (user) {
      const check = bcrypt.compareSync(req.body.password, user.password);
      if (check) {
        const token = jwt.sign(
          { userId: user._id },
          process.env.SECRET_TOKEN_KEY as string,
          { expiresIn: "48h" }
        );
        return res
          .cookie("token", token, {
            maxAge: 172800000,
            httpOnly: true,
            sameSite: "none",
          })
          .status(200)
          .json({ success: true, message: "Logged In" });
      }
    }
    return res
      .status(200)
      .json({ success: false, message: "Username or Password are incorrect" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};
