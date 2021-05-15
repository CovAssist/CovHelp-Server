import express from "express";
import cors from "cors";
if (process.env.NODE_ENV === "test")
  require("dotenv").config({ path: ".env.test" });
const app = express();
import routes from "./routes";
import { connect } from "./db";
import { populateDb, emptyDb } from "./testdata";
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/api", routes);
const start = async () => {
  await connect();
  await populateDb();
  app.get("/", (req, res) => {
    res.send("Hello World");
  });
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running");
  });
};
start();
export default app;
