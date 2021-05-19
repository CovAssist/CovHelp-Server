import { Request } from "express";
import { AppResponse } from "../../@types";
import { VacantBeds, IVacantBeds } from "../../models";
export default async (req: Request, res: AppResponse) => {
  try {
    if (req.body && req.body.id) {
      const bed = await VacantBeds.findOne({ _id: req.body.id });
      if (bed) {
        bed[req.query.verified ? "verified" : "status"] =
          !bed[req.query.verified ? "verified" : "status"];
        await bed.save();
        res.status(200).json({ success: true, message: "VacantBeds updated" });
      } else {
        res.status(404).json({ error: true, message: "VacantBeds not found" });
      }
    } else {
      res
        .status(400)
        .json({ error: true, message: "VacantBeds id not provided" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};
