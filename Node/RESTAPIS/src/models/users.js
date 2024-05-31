const mongoose = require("mongoose");

const User = mongoose.model("User", {
    name: String,
    email: String,
    phone: Number,
    password: String,
    isMinor: Boolean,
  });


module.exports = User;
