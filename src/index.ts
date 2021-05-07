import express from "express"
import cors from "cors";
const app = express();
import routes from "./routes"
app.use(cors())
app.use("/api",routes);
app.get('/',(req,res)=>{res.send("Hello World")})
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
