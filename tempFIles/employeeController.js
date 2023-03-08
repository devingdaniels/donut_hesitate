// Handle erros on async functions
const asyncHandler = require("express-async-handler");

const db = require("../config/db");

const getEmployees = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/employeecontroller/getEmployees");
  const employees = "SELECT * FROM Employees;";

  db.pool.query(query, (err, results) => {
    res.status(200).json(results);
  });
});

const createEmployee = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/employeecontroller/createEmployee");
  const {employee_name, shift_worked} = re1.body;

  const query = `INSERT INTO Employees (employee_name, shift_worked) VALUES ('${employee_name}', '${shift_worked}')`;

  // Execute the SQL insert statement
  db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: "Employee added successfully" });
    }
  });
});

const editEmployee = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/employeecontroller/editEmployee");
  const { employee_id, employee_name, shift_worked} = req.body;
  console.log(employee_id, employee_name, shift_worked);

  const query = `UPDATE Employees SET employee_name = '${employee_name}', shift_worked = '${shift_worked}' WHERE employee_id = ${employee_id}`;

  db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: "Employee edited successfully" });
    }
  });
});
  
const deleteEmployee = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/employeecontroller/deleteEmployee");
  const {employee_id} = req.body;
  const query = `DELETE FROM Employees WHERE Employees.employee_id = ${ employee_id}`;

   // Execute the SQL insert statement
   db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ customer_id: customer_id });
    }
  });
});
  
module.exports = {
  getEmployees,
  createEmployee,
  editEmployee,
  deleteEmployee,
};
