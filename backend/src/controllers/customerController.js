// Handle erros on async functions
const asyncHandler = require("express-async-handler");
const fakeData = require("../fakeData");
const db = require("../config/db");
require("dotenv").config();

const getCustomers = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/customerController/getCustomers");
  if (process.env.MODE === "development") {
    res.status(200).json(fakeData.customers);
  } else {
    const query = "SELECT * FROM Customers;";
    db.pool.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json(results);
      }
    });
  }
});

const createCustomer = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/customercontroller/createcustomer");
  if (process.env.MODE === "development") {
    res.status(200).json(fakeData.customers);
  } else {
    const { customer_name, email, phone_number } = req.body;
    const query = `INSERT INTO Customers (customer_name, email, phone_number) VALUES ('${customer_name}', '${email}', '${phone_number}')`;
    db.pool.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ message: "Customer added successfully" });
      }
    });
  }
});

const editCustomer = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/customercontroller/editcustomer");
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
  console.log("backend/src/controllers/customercontroller/deletecustomer");
  if (process.env.MODE === "development") {
    res.status(200).json({ message: "Succesful delete in DEV" });
  } else {
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
  }
});

module.exports = {
  getCustomers,
  createCustomer,
  editCustomer,
  deleteCustomer,
};
