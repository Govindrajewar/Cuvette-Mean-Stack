const express = require("express");
const ejs = require("ejs");

const app = express();
const serverName = "NodeServer2";
const port = 5000;

// set ejs as view engine
app.set("view engine", "ejs");


const USERS = [
    {
        "username": "george",
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
      },
      {
        "username": "janet",
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
      },
      {
        "username": "emma",
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
      },
      {
        "username": "eve",
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
      },
      {
        "username": "charles",
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://reqres.in/img/faces/5-image.jpg"
      },
      {
        "username": "tracey",
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
      }
]

app.get("/", (req, res) => {
    res.send("Landing page...");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});


// app.get("/george", (req, res) => {
//   res.render("user", {
//     email: "george.bluth@reqres.in",
//     first_name: "George",
//     last_name: "Bluth",
//     avatar: "https://reqres.in/img/faces/1-image.jpg",
//     isPremium: false,
//     hobbies: ["Swimming", "Dancing"],
//   });
// });

// app.get("/janet", (req, res) => {
//   res.render("user", {
//     email: "janet.weaver@reqres.in",
//     first_name: "Janet",
//     last_name: "Weaver",
//     avatar: "https://reqres.in/img/faces/2-image.jpg",
//     isPremium: true,
//     hobbies: ["Coding"],
//   });
// });

// app.get("/emma", (req, res) => {
//   res.render("user", {
//     email: "emma.wong@reqres.in",
//     first_name: "Emma",
//     last_name: "Wong",
//     avatar: "https://reqres.in/img/faces/3-image.jpg",
//     isPremium: false,
//     hobbies: ["Reading", "Coding", "Swimming", "Dancing"],
//   });
// });


// View engine / Template engine
// Create route using dynamic values:

app.get('/user/:username', (req, res)=> {
    const {username} = req.params;

    const userDetails = USERS.find((user => user.username === username))

    if(userDetails){
        res.render('user', userDetails)
    } else{
        // res.redirect('/about');
        res.redirect("/user/notfound");
    }
})

app.get("/user/notfound", (req, res) => {
    res.sendFile(__dirname + "/pageNotFound.html");
  });


app.listen(port, () => {
  console.log(`${serverName} is running on port ${port}`);
});
