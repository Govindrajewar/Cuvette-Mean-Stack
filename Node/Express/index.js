const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/me", (req, res) => {
  res.send("Hello, I am Govind Rajewar");
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
