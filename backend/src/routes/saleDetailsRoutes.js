// Imports
const express = require("express");
const router = express.Router();
const { getSaleDetails } = require("../controllers/saleDetails");
// Donuts routes
router.get("/", getSaleDetails);

module.exports = router;
