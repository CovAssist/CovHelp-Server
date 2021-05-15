import { Request } from "express";
import { AppResponse } from "../../@types";
import { Volunteer, IVolunteer } from "../../models";
export default async (req: Request, res: AppResponse) => {
  try {
    if (req.body && req.body.id) {
      const volunteer = await Volunteer.findOne({ _id: req.body.id });
      if (volunteer) {
        volunteer[req.query.verified ? "verified" : "status"] =
          !volunteer[req.query.verified ? "verified" : "status"];
        await volunteer.save();
        res.status(200).json({ success: true, message: "Volunteer updated" });
      } else {
        res.status(404).json({ error: true, message: "Volunteer not found" });
      }
    } else {
      res
        .status(400)
        .json({ error: true, message: "Volunteer id not provided" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};
