require("dotenv").config();
const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const fakeData = require("../fakeData");

const getCustomers = asyncHandler(async (req, res) => {
  if (process.env.MODE === "development") {
    res.status(200).json(fakeData.customers);
  } else {
    const query = "SELECT * FROM Customers;";
    db.pool.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ message: "Server error" });
      } else {
        res.status(200).json(results);
      }
    });
  }
});

const createCustomer = asyncHandler(async (req, res) => {
  const { customer_name, email, phone_number } = req.body;
  if (process.env.MODE === "development") {
    res.status(200).json({ message: "Development mode..." });
  } else {
    const query = `INSERT INTO Customers (customer_name, email, phone_number) VALUES ('${customer_name}', '${email}', '${phone_number}')`;
    db.pool.query(query, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(201)
          .json({
            message: "Customer added successfully",
            id: result.insertId,
          });
      }
    });
  }
});

const editCustomer = asyncHandler(async (req, res) => {
  const { customer_id, customer_name, email, phone_number } = req.body;
  if (process.env.MODE === "development") {
    res.status(200).json({ message: "Development mode..." });
  } else {
    const query = `UPDATE Customers SET customer_name = '${customer_name}', email = '${email}', phone_number = '${phone_number}' WHERE customer_id = ${customer_id}`;
    db.pool.query(query, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ message: "Customer added successfully" });
      }
    });
  }
});

const deleteCustomer = asyncHandler(async (req, res) => {
  const { customer_id } = req.body;
  if (process.env.MODE === "development") {
    res.status(200).json({ message: "Development mode..." });
  } else {
    const query = `DELETE FROM Customers WHERE Customers.customer_id = ${customer_id}`;
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
