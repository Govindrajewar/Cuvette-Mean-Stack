// We are not going to use the default code:
// Node.js basic server
// execute "node index.js"

/*
const { createServer } = require('node:http');

const server = createServer((req, res) => {
  res.end('Our First Request');
});

//          (port number, message)
server.listen(3000, () => {
  console.log(`Server is running :) /`);
});
*/

// Using Express.js Framework:
const express = require("express");
const app = express(); // create a new server instance
const port = 3000;

const USERS = [
  { id: 1, name: "John", batchNo: 10, city: "San Francisco" },
  { id: 2, name: "Jane", batchNo: 11, city: "San Diego" },
  { id: 3, name: "Peter", batchNo: 12, city: "San Joseph" },
];

const isUserLoggedIn = (req, res, next) => {
  const isLoggedIn = false;   //Test

  if (isLoggedIn) {
    next();
  } else {
    res.json({
      message: "You are not logged in Please log-in.",
    })
  }
};

// app.use(isUserLoggedIn);      // Applied middleware to all routes

app.get("/", (req, res) => {
  res.send("This is our first Express.js server.");
});

app.get("/users", (req, res) => {
  res.json(USERS); // displays data in JSON format
});

app.get("/users/even", (req, res) => {
  res.send(USERS.filter((users) => users.batchNo % 2 == 0));
});

// it should be return users who have 5 letters in their name
app.get("/users/custom1", (req, res) => {
  res.send(USERS.filter((users) => users.name.length == 5));
});

app.get("/about", isUserLoggedIn, (req, res) => {
  res.sendFile(__dirname + "/html/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/html/contact.html");
});

app.get("/download", (req, res) => {
  res.download(__dirname + "/assets/samplePdf.pdf");
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.listen(port, () => {
  console.log(`Server is ready to Use`);
});
