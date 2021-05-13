import { Request } from "express";
import { AppResponse } from "../../@types";
import { Oxygen, IOxygen } from "../../models";
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
    let oxygen: Array<IOxygen> = [];

    if (req.query.name)
      oxygen = await Oxygen.find({
        city: `${req.query.city}`,
        verified: req.query.verified === "true",
      });
    else
      oxygen = await Oxygen.find({
        verified: req.query.verified === "true",
      });
    const count = oxygen.length;
    const start = parseInt(req.query.start as string);
    const end = parseInt(req.query.end as string);
    if (end > count - 1) oxygen = oxygen.slice(start);
    else oxygen = oxygen.slice(start, end + 1);
    return res.status(200).json({
      data: { data: oxygen, count },
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
