// Imports
const express = require("express");
const router = express.Router();
const {
  getEmployees,
  editEmployee,
  createEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");
// Donuts routes
router.get("/", getEmployees);
router.post("/", createEmployee);
router.put("/", editEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
