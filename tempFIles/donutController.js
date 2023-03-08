// Handle erros on async functions
const asyncHandler = require("express-async-handler");

const db = require("../config/db");

const getDonuts = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/donutcontroller/getDonuts");
  const query = "SELECT * FROM Donuts;";

  db.pool.query(query, (err, results) => {
    res.status(200).json(results);
  });
});

const createDonut = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/donutcontroller/createDonut");
  const { donut_name, price } = req.body;

  const query = `INSERT INTO Donuts (donut_name, price) VALUES ('${donut_name}', '${price}')`;

  // Execute the SQL insert statements
  db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: "Donut added successfully" });
    }
  });
});

const editDonut = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/donutcontroller/editDonut");
  const { donut_id, donut_name, price } = req.body;
  console.log(donut_id, donut_name, price);

  const query = `UPDATE Donuts SET donut_name = '${donut_name}', price = '${price}' WHERE donut_id = ${donut_id}`;
  // Execute the SQL insert statements
  db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: "Donut edited successfully" });
    }
  });
});

const deleteDonut = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/donutcontroller/deleteDonut");
  const { donut_id } = req.body;
  const query = `DELETE FROM Donuts WHERE Donuts.donut_id = ${customer_id}`;
  // Execute the SQL insert statement
  db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ donut_id: donut_id });
    }
  });
});

module.exports = {
  getDonuts,
  createDonut,
  editDonut,
  deleteDonut,
};
