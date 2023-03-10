// Handle erros on async functions
const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const fakeData = require("../fakeData");

const getEmployees = asyncHandler(async (req, res) => {
  if (process.env.MODE === "development") {
    res.status(200).json(fakeData.employees);
  } else {
    const query = "SELECT * FROM Employees;";
    db.pool.query(query, (err, results) => {
      res.status(200).json(results);
    });
  }
});

const createEmployee = asyncHandler(async (req, res) => {
  const { employee_name, shift_worked } = req.body;
  if (process.env.MODE === "development") {
    res.status(201).json(fakeData.employees);
  } else {
    const query = `INSERT INTO Employees (employee_name, shift_worked) VALUES ('${employee_name}', '${shift_worked}')`;
    db.pool.query(query, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json({ message: " added successfully" });
      }
    });
  }
});

const editEmployee = asyncHandler(async (req, res) => {
  const { employee_id, employee_name, shift_worked } = req.body;
  if (process.env.MODE === "development") {
    res.status(200).json({ message: `${employee_id} + dev mode` });
  } else {
    const query = `UPDATE Employees SET employee_name = '${employee_name}', shift_worked = '${shift_worked}' WHERE employee_id = ${employee_id}`;
    db.pool.query(query, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ message: "Employee edited successfully" });
      }
    });
  }
});

const deleteEmployee = asyncHandler(async (req, res) => {
  const { employee_id } = req.body;
  if (process.env.MODE === "development") {
    res.status(200).json({ message: `${employee_id} + dev mode` });
  } else {
    const query = `DELETE FROM Employees WHERE Employees.employee_id = ${employee_id}`;
    db.pool.query(query, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: `Customer ${employee_id} deleted successfully` });
      }
    });
  }
});

module.exports = {
  getEmployees,
  createEmployee,
  editEmployee,
  deleteEmployee,
};
