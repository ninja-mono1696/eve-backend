const express = require("express");
const { ProductMode } = require("../models/ProductModel");

const productRoute = express.Router();

productRoute.get("/", async (req, res) => {
  const product = await ProductMode.find();
  res.send(product);
});
productRoute.get("/:category", async (req, res) => {
  const params = req.params.category;
  const product = await ProductMode.find({ Category: params });
  res.send(product);
});

productRoute.get("/id/:id", async (req, res) => {
  const params = req.params.id;
  const product = await ProductMode.find({ _id: params });
  res.send(product);
});

productRoute.post("/create", async (req, res) => {
  const payload = req.body;
  // console.log(payload)
  const post = new ProductMode(payload);
  await post.save();
  res.send({ msg: "posts created" });
});

module.exports = { productRoute };
