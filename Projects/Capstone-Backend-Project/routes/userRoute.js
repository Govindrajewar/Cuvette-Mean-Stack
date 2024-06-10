const express = require("express");
const router = express.Router();
const User = require("../model/User.js");
const bcrypt = require('bcrypt');

// post, get, put, delete

router.get("/", async (req, res) => {
  const users = await User.find();

  res.json({
    message: "User route is working fine",
    status: "Working",
    users: users,
  });
});

// register
// TODO: Create a validation middleware
router.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      res.status(201).json({
        message: "User registered successfully",
        user: newUser,
      });
    } else {
      res.status(400).json({
        status: "ERROR",
        message: "User already exists",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      message: error.message,
    });
  }
});

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
    const isValidPassword = await bcrypt.compare(password, existingUser.password);
      if (isValidPassword) {
        res.status(200).json({
          message: "Login is successful",
          user: existingUser.email,
        });
      } else {
        res.status(400).json({
          message: "Invalid Password",
        });
      }
    } else {
      res.status(400).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
});

module.exports = router;
