const mongoose = require("mongoose");

const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String,
    isPremium: Boolean,
    isAdmin: Boolean,
  });


module.exports = User;
