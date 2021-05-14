import { Request } from "express";
import { AppResponse } from "../../@types";
import { Patient } from "../../models";
export default async (req: Request, res: AppResponse) => {
  if (req.query.verified === undefined) {
    return res
      .status(404)
      .json({ error: true, message: "Provide query string verified " });
  }
  try {
    req.body.data.verified = req.query.verified == "true";
    const patient = await Patient.create(req.body.data);
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
