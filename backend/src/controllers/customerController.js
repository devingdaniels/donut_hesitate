require("dotenv").config();
const asyncHandler = require("express-async-handler");
const fakeData = require("../fakeData");
const Customer = require("../models/customerModel");

const getCustomers = asyncHandler(async (req, res) => {
  if (process.env.MODE === "development") {
    res.status(200).json(fakeData.customers);
  } else {
    try {
      const customers = await Customer.getCustomers();
      res.status(200).json(customers);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Server Error" });
    }
  }
});

const createCustomer = asyncHandler(async (req, res) => {
  if (process.env.MODE === "development") {
    res.status(200).json(fakeData.customers);
  } else {
    try {
      const { customer_name, email, phone_number } = req.body;
      const status = Customer.createCustomer(
        customer_name,
        email,
        phone_number
      );
      res.status(200).json({ message: "Customer added successfully" });
    } catch (error) {}
  }
});

const editCustomer = asyncHandler(async (req, res) => {
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
