import { Request } from "express";
import { AppResponse } from "../../@types";
import { VacantBeds, IVacantBeds } from "../../models";
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
    let beds: Array<IVacantBeds> = [];
    if (req.query.hoscity)
      beds = await VacantBeds.find({
        hoscity: { $regex: `${req.query.hoscity}` },
        verified: req.query.verified === "true",
      });
    else
      beds = await VacantBeds.find({
        verified: req.query.verified === "true",
      });
    const count = beds.length;
    const start = parseInt(req.query.start as string);
    const end = parseInt(req.query.end as string);
    if (end > count - 1) beds = beds.slice(start);
    else beds = beds.slice(start, end + 1);
    return res.status(200).json({
      data: { data: beds, count },
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
