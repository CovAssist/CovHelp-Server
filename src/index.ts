import express from "express"
const app = express();
require("dotenv").config();
app.get('/',(req,res)=>{res.send("Hello World")})
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
