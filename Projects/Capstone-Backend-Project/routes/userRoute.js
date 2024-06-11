const express = require("express");
const router = express.Router();
const validateNewUser = require('../middleware/validateNewUser.js')

const {
  getUsers,
  registerUser,
  loginUser
} = require('../controllers/userController')


// post, get, put, delete
router.get("/", getUsers);

// register
router.post("/register", validateNewUser, registerUser);

// login
router.post("/login", loginUser);


module.exports = router;
