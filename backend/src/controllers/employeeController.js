// Handle erros on async functions
const asyncHandler = require("express-async-handler");

const getEmployees = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/employeecontroller/getEmployees");
  const employees = [
    {
      employee_id: "1",
      employee_name: "John Doe",
      shift_worked: "2022-12-20",
    },
    {
      employee_id: "2",
      employee_name: "Steve Doe",
      shift_worked: "2022-12-12",
    },
    {
      employee_id: "3",
      employee_name: "Eva Doey2",
      shift_worked: "2022-12-20",
    },
  ];

  // DELETE DONUT ARRAY ABOVE AND CODE SQL SELECT STATEMENT HERE

  res.status(200).json(employees);
});

const createEmployee = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/employeecontroller/createEmployee");
  res.status(200).json(req.body);
});

const editEmployee = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/employeecontroller/editEmployee");
  res.status(200).json(req.body);
});

const deleteEmployee = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/employeecontroller/deleteEmployee");
  res.status(200).json(req.body);
});

module.exports = {
  getEmployees,
  createEmployee,
  editEmployee,
  deleteEmployee,
};
