const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.js");

router.get("/users", getUsers);

router.post("/users", createUser);

router.patch("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router

