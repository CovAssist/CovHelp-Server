import { Request } from "express";
import { AppResponse } from "../../@types";
import { Volunteer } from "../../models";
export default async (req: Request, res: AppResponse) => {
  if (req.query.verified === undefined) {
    console.log(req.query);

    return res
      .status(404)
      .json({ error: true, message: "Provide query string verified " });
  }
  try {
    req.body.verified = req.query.verified == "true";
    req.body.status = true;
    const patient = await Volunteer.create(req.body);
    return res
      .status(200)
      .json({ success: true, data: patient, message: "Create Success" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};
