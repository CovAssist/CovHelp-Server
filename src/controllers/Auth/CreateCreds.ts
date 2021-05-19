import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import { UserAuth, IUserAuth, Volunteer } from "../../models";
import bcrypt from "bcrypt";
export default async (req: Request, res: Response) => {
  if (req.body.id === undefined) {
    return res.status(400).json({ error: true, message: "Provide an Id" });
  }
  try {
    var chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = "";
    for (var i = 0; i < string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    const volunteer = await Volunteer.findOne({ _id: req.body.id });
    if (volunteer) {
      const firstname = volunteer.name.split(" ")[0];
      const username = `${firstname}@covhelp`;
      const password = await bcrypt.hash(randomstring, 10);
      await UserAuth.create({
        username,
        password,
        volId: req.body.id,
        admin: true,
      });
      return res
        .status(200)
        .json({ success: true, password: randomstring, email: username });
    }
    return res.status(400).json({ error: true, message: "Provide a valid Id" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};
