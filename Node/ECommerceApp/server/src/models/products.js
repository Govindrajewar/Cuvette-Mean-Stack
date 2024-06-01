const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
    name: String,
    price: Number,
    imageURL: String,
    description: String,
    ratings: Number,
  });


module.exports = Product;
