import { Request } from "express";
import { AppResponse } from "../../@types";
import { Donor, IDonor } from "../../models";

export default async (req: Request, res: AppResponse) => {
  if (req.query.verified === undefined)
    return res.status(400).json({
      message: "Please provide verification status",
      error: true,
    });

  if (!req.query.start && !req.query.end)
    return res.status(400).json({
      message: "Please provide start and end parameters in query string",
      error: true,
    });

  try {
    let donors: Array<IDonor> = [];

    if (req.query.name)
        donors = await Donor.find({
        name: `${req.query.name}`,
        verified: req.query.verified === "true",
      });
    else
      donors = await Donor.find({
        verified: req.query.verified === "true",
      });
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
