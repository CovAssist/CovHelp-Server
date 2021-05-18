import { Request } from "express";
import { AppResponse } from "../../@types";
import { Donor, IDonor } from "../../models";

export default async (req: Request, res: AppResponse) => {
  if (!req.query.start && !req.query.end)
    return res.status(400).json({
      message: "Please provide start and end parameters in query string",
      error: true,
    });

  try {
    let donors: Array<IDonor> = [];
    if (req.query.blood)
      donors = await Donor.find({
        blood: { $regex: `${req.query.blood}`, $options: "i" },
      });
    else donors = await Donor.find({});
    const count = donors.length;
    const start = parseInt(req.query.start as string);
    const end = parseInt(req.query.end as string);
    if (end > count - 1) donors = donors.slice(start);
    else donors = donors.slice(start, end + 1);
    return res.status(200).json({
      data: { data: donors, count },
      success: true,
      message: "Result Success",
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
