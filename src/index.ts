import express from "express";
import cors from "cors";
const app = express();
import routes from "./routes";
import { connect } from "./db";
import { populateDb } from "./testdata";
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/api", routes);
connect();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
export default app;
