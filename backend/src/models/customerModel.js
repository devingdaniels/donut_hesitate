const db = require("../config/db");

// Function to get all customers
const getCustomers = async () => {
  const query = "SELECT * FROM customers";
  db.pool.query(query, (err, results) => {
    if (err) {
      return err;
    } else {
      return results;
    }
  });
};

// Function to add a new customer
const addCustomer = async (customer_name, email, phone_number) => {
  const query = `INSERT INTO Customers (customer_name, email, phone_number) VALUES ('${customer_name}', '${email}', '${phone_number}')`;
  db.pool.query(query, (err, results) => {
    if (err) {
      return err;
    } else {
      return "Customer added successfully!";
    }
  });

  db.pool.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: "Customer added successfully" });
    }
  });
};

// Function to create a new customer object
const createCustomer = (name, email, address) => {
  return { name, email, address };
};

// Function to delete a customer by ID
const deleteCustomer = async (id) => {
  const query = "DELETE FROM customers WHERE id = ?";
  const [result] = await db.query(query, id);
  return result.affectedRows > 0;
};

module.exports = {
  getCustomers,
  addCustomer,
  createCustomer,
  deleteCustomer,
};
