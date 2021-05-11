import { Request } from "express";
import { AppResponse } from "../../@types";
import { Volunteer, IVolunteer } from "../../models";
export default async (req: Request, res: AppResponse) => {
  try {
    let volunteers: Array<IVolunteer> = [];
    let message = "";
    let error = false;
    if (req.query.verified && req.query.verified === "true") {
      if (req.query.name) {
        volunteers = await Volunteer.find({
          name: `${req.query.name}`,
          verified: true,
        });
      } else {
        volunteers = await Volunteer.find({ verified: true });
      }
    } else {
      if (req.query.name) {
        volunteers = await Volunteer.find({
          name: `${req.query.name}`,
          verified: false,
        });
      } else {
        volunteers = await Volunteer.find({ verified: false });
      }
    }
    const count = volunteers.length;
    if (req.query.start && req.query.end) {
      message = "Result Success";
      const start = parseInt(`${req.query.start}`);
      const end = parseInt(`${req.query.end}`);
      if (Number.isInteger(start) && Number.isInteger(end)) {
        if (end > count - 1) {
          volunteers = volunteers.slice(start);
        } else {
          volunteers = volunteers.slice(start, end + 1);
        }
      }
    } else {
      message = "Please provide start and end parameters in query string";
      error = true;
      volunteers = volunteers.slice(0, 20);
    }
    return res
      .status(200)
      .json({
        data: { data: volunteers, count },
        success: true,
        error: error,
        message: message,
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: { data: [], count: 0 },
      success: false,
      error: true,
      message: "Server error",
    });
  }
};
