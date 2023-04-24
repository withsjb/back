const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/AuthRoutes");
const app = express();
const cookieParser = require("cookie-parser");

app.listen(4000, () => {
  console.log("Server Started on port 4000");
});

mongoose
  .connect(
    "mongodb+srv://withsjb:as7170882@cluster0.ub4j94d.mongodb.net/?retryWrites=true&w=majority",
    {}
  )
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(
  cors({
    origin: ["https://front-bay-pi.vercel.app/"],
    method: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);
