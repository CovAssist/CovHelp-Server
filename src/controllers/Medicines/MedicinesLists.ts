import { Request } from "express";
import { AppResponse } from "../../@types";
import { Medicine, IMedicines } from "../../models";
export default async (req: Request, res: AppResponse) => {
  if (req.query.verified === undefined)
    return res.status(400).json({
      message: "Please provide verification status",
      error: true,
    });
  if (req.query.status === undefined)
    return res.status(400).json({
      message: "Please provide query status",
      error: true,
    });

  if (!req.query.start && !req.query.end)
    return res.status(400).json({
      message: "Please provide start and end parameters in query string",
      error: true,
    });

  try {
    let medicines: Array<IMedicines> = [];

    if (req.query.name)
      medicines = await Medicine.find({
        name: { $regex: `${req.query.name}` },
        verified: req.query.verified === "true",
        status: req.query.status === "true",
      });
    else
      medicines = await Medicine.find({
        verified: req.query.verified === "true",
        status: req.query.status === "true",
      });
    const count = medicines.length;
    const start = parseInt(req.query.start as string);
    const end = parseInt(req.query.end as string);
    if (end > count - 1) medicines = medicines.slice(start);
    else medicines = medicines.slice(start, end + 1);
    return res.status(200).json({
      data: { data: medicines, count },
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
