import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
if (process.env.NODE_ENV === "test")
  require("dotenv").config({ path: ".env.test" });
const app = express();
import routes from "./routes";
import { connect } from "./db";
import { populateDb, emptyDb } from "./testdata";
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://covi-help-client.vercel.app",
    "https://cov-help-admin.vercel.app",
    "http://localhost:3000",
    "https://aaravforcovid.vercel.app",
  ];
  const origin = req.headers.origin ? req.headers.origin : "";
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  return next();
});
const url =
  process.env.NODE_ENV === "production"
    ? "https://cov-help-admin.vercel.app"
    : "http://localhost:3000";
//app.use(cors({ credentials: true }));
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
