import { Request } from "express";
import { AppResponse } from "../../@types";
import { Medicine, IMedicines } from "../../models";
export default async (req: Request, res: AppResponse) => {
  try {
    if (req.body && req.body.id) {
      const medicine = await Medicine.findOne({ _id: req.body.id });
      if (medicine) {
        medicine[req.query.verified ? "verified" : "status"] =
          !medicine[req.query.verified ? "verified" : "status"];
        await medicine.save();
        res.status(200).json({ success: true, message: "Medicine updated" });
      } else {
        res.status(404).json({ error: true, message: "Medicine not found" });
      }
    } else {
      res
        .status(400)
        .json({ error: true, message: "Medicine id not provided" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};
