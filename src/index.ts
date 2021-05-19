import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
if (process.env.NODE_ENV === "test")
  require("dotenv").config({ path: ".env.test" });
const app = express();
import routes from "./routes";
import { connect } from "./db";
import { populateDb, emptyDb } from "./testdata";
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use("/api", routes);
const start = async () => {
  await connect();
  app.get("/", (req, res) => {
    res.send("Hello World");
  });
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running");
  });
};
start();
export default app;
