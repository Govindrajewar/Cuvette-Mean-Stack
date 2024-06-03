const express = require("express");
const router = express.Router();

const {
  getUsers,
  signupUser,
  loginUser
} = require("../controllers/users.js");

router.get("/users", getUsers);

router.post("/users/signup", signupUser);

router.post("/users/login", loginUser);


module.exports = router

