// Imports
const express = require("express");
const router = express.Router();
const { getSales, createSale } = require("../controllers/saleController");
// Donuts routes
router.get("/", getSales);
router.post("/", createSale);

module.exports = router;
