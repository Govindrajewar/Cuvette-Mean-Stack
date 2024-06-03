const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Server Connected to Database"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.json({
    message: "Server is live",
    date: new Date().toLocaleDateString(),
  });
});

app.get("/health", (req, res) => {
  res.json({
    message: "Job listing API",
    active: true,
    date: new Date().toLocaleDateString(),
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

/**
 * We will use Postman to test our API
 *
 */
