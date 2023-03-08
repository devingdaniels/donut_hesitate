// Handle erros on async functions
const asyncHandler = require("express-async-handler");

const db = require("../config/db");

const getCustomers = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/customerController");
  const query = "SELECT * FROM Customers;";

  db.pool.query(query, (err, results) => {
    res.status(200).json(results);
  });
});

const createCustomer = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/customerController/createcustomer");
  const { customer_name, email, phone_number } = req.body;

  const query = `INSERT INTO Customers (customer_name, email, phone_number) VALUES ('${customer_name}', '${email}', '${phone_number}')`;

  // Execute the SQL insert statement
  db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: "Customer edited successfully" });
    }
  });
});

const editCustomer = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/customerController/editcustomer");
  const { customer_id, customer_name, email, phone_number } = req.body;
  console.log(customer_id, customer_name, email, phone_number);

  const query = `UPDATE Customers SET customer_name = '${customer_name}', email = '${email}', phone_number = '${phone_number}' WHERE customer_id = ${customer_id}`;

  db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: "Customer added successfully" });
    }
  });
});

const deleteCustomer = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/customerController/deletecustomer");
  const { customer_id } = req.body;
  const query = `DELETE FROM Customers WHERE Customers.customer_id = ${customer_id}`;
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
  getCustomers,
  createCustomer,
  editCustomer,
  deleteCustomer,
};
