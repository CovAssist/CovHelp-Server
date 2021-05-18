import { Request } from "express";
import { AppResponse } from "../../@types";
import { Oxygen, IOxygen } from "../../models";
export default async (req: Request, res: AppResponse) => {
  try {
    if (req.body && req.body.id) {
      const oxygen = await Oxygen.findOne({ _id: req.body.id });
      if (oxygen) {
        oxygen[req.query.verified ? "verified" : "status"] =
          !oxygen[req.query.verified ? "verified" : "status"];
        await oxygen.save();
        res.status(200).json({ success: true, message: "Oxygen updated" });
      } else {
        res.status(404).json({ error: true, message: "Oxygen not found" });
      }
    } else {
      res.status(400).json({ error: true, message: "Oxygen id not provided" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};
