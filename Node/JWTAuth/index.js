const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./src/routes/users.js");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(userRoutes);


// import middlewares:
const {
  isUserLoggedIn,
  isUserAdmin,
  isUserPremium,
} = require("./src/middlewares/users.js");


app.get("/", (req, res) => {
  res.json({
    status: "Server is running...",
    now: new Date(),
  });
});

// Log in
app.get("/profile", isUserLoggedIn, (req, res) => {
  res.json({
    status: "PROFILE PAGE",
    now: new Date(),
  });
});

// Log in
app.get("/dashboard", isUserLoggedIn, (req, res) => {
  res.json({
    status: "User Dashboard",
    now: new Date(),
  });
});

// Log in + Admin
app.get("/admin-dashboard", isUserLoggedIn, isUserAdmin, (req, res) => {
  res.json({
    status: "ADMIN PAGE",
    now: new Date(),
  });
});

// Log in + Premium users
app.get("/premium-content", isUserLoggedIn, isUserPremium, (req, res) => {
  res.json({
    status: "Premium Content",
    now: new Date(),
  });
});

app.listen(process.env.Port, () => {
  mongoose
    .connect(process.env.MongoDB_URL)
    .then(() => console.log("Server is Successfully Running..."))
    .catch((err) => console.log(err));
});
