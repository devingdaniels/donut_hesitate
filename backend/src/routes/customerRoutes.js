// Imports
const express = require("express");
const router = express.Router();
const {
  getCustomers,
  createCustomer,
  editCustomer,
  deleteCustomer,
} = require("../controllers/customerController");
// Donuts routes
router.get("/", getCustomers);
router.post("/", createCustomer);
router.put("/", editCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
