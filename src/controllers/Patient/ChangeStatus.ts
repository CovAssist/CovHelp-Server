import { Request } from "express";
import { AppResponse } from "../../@types";
import { Patient, IPatient } from "../../models";
export default async (req: Request, res: AppResponse) => {
  try {
    if (req.body && req.body.id) {
      const patient = await Patient.findOne({ _id: req.body.id });
      if (patient) {
        patient[req.query.verified ? "verified" : "status"] =
          !patient[req.query.verified ? "verified" : "status"];
        await patient.save();
        res.status(200).json({ success: true, message: "Patient updated" });
      } else {
        res.status(404).json({ error: true, message: "Patient not found" });
      }
    } else {
      res.status(400).json({ error: true, message: "Patient id not provided" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};
