require("dotenv").config({ path: "./config.env" });
const express = require("express");
const authRoute = require("./routes/authRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/DB");
const app = express();
app.use(
  cors({
    credentials: true,
    origin: "https://frontend-intro-section-dropdown.vercel.app/",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({ extended: true, limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use("/auth", authRoute);

connectDB();
app.listen(process.env.PORT || 4000, () =>
  console.log("server is listeing on port 4000")
);

// server.on("unHa")
