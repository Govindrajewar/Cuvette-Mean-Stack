const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();

const userRoutes= require('./src/routes/users.js');

const app = express();
app.use(bodyParser.urlencoded())
app.use(userRoutes);


app.get("/", (req, res) => {
  res.send("REST APIs running fine");
});


app.listen(process.env.Port, () => {
  mongoose
    .connect(process.env.MongoDB_URL)
    .then(() => console.log("Server is Successfully Running..."))
    .catch((err) => console.log(err));
});