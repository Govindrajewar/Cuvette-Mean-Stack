const express = require("express");
const app = express();
const port = 4000;

// app.use(express.static('public'));

// Middleware:
const customMiddleware = (req, res, next) => {
  req.customInfo = 20;
  console.log("You enter in Custom middleware");
  next();
};

app.get("/", (req, res) => {
  // res.send("Hello World!");

  res.json({
    status: "SUCCESS",
    time: new Date(),
  });
});

app.get("/me", customMiddleware, (req, res) => {
  console.log(req.customInfo);
  res.send("Hello, I am Govind Rajewar");
});

app.get("/shop", (req, res) => {
  console.log(req.query);
  res.send("Welcome to the shop");
});

app.get("/users/:username", (req, res) => {
  console.log(req.params);
  res.send("welcome into users search");
});

app.get("/sendfile", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log(err);
  }
});
