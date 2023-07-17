const express = require("express");
const ProductService = require("../services/product.service");
const { FixedPriceProduct } = require("../models/product.model");

const router = express.Router();
const productService = new ProductService();

router.get("/", (req, res) => {
  res.json({
    name: "Products",
    routes: {
      FixedPriceProducts: "/products/fixed-price",
      VariablePriceProducts: "/products/variable-price",
      CompositePriceProducts: "/products/composite-price",
    },
  });
});

router.get("/fixed-price", (req, res) => {
  const fixedPriceProducts = productService.getFixedPriceProducts();
  res.json(fixedPriceProducts);
});

router.get("/variable-price", (req, res) => {
  const variablePriceProducts = productService.getVariablePriceProducts();
  res.json(variablePriceProducts);
});

router.get("/composite-price", (req, res) => {
  const compositePriceProducts = productService.getCompositePriceProducts();
  res.json(compositePriceProducts);
});

module.exports = router;
