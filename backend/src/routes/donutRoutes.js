// Imports
const express = require("express");
const router = express.Router();
const {
  getDonuts,
  editDonut,
  createDonut,
  deleteDonut,
} = require("../controllers/donutController");
// Donuts routes
router.get("/", getDonuts);
router.post("/", createDonut);
router.put("/", editDonut);
router.delete("/:id", deleteDonut);

module.exports = router;
