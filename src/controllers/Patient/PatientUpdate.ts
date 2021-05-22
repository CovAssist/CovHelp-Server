import { Request } from "express";
import { AppResponse } from "../../@types";
import { Patient } from "../../models";
export default async (req: Request, res: AppResponse) => {
  if (!req.body) {
    return res.status(400).json({ error: true, message: "Provide body" });
  }
  try {
    if (!req.body._id) {
      return res.status(400).json({ error: true, message: "Id not provided" });
    }
    const patient = await Patient.findOne({ _id: req.body._id });
    if (!patient) {
      return res
        .status(404)
        .json({ error: true, message: "Patient not found" });
    }
    const newPatient = await Patient.updateOne({ _id: patient._id }, req.body);
    return res.status(200).json({
      success: true,
      data: newPatient,
      message: "Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};
