const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: String,
  img1: String,
  img2: String,
  price: String,
  PriceToAccess: Number,
  Stock: Number,
  ProductDescription: Array,
  ProductDetails: Array,
  Category: String,
});

const ProductMode = mongoose.model("product", ProductSchema);

module.exports = { ProductMode };
