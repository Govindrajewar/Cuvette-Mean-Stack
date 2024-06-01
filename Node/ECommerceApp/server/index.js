const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const productRoutes= require('./src/routes/products.js');

const app = express();
// cors must be use first.
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(productRoutes);


app.get("/", (req, res) => {
  res.json({
    status: 'Server is running',
    now: new Date()
  });
});


app.listen(process.env.Port, () => {
  mongoose
    .connect(process.env.MongoDB_URL)
    .then(() => console.log("Server is Successfully Running..."))
    .catch((err) => console.log(err));
});