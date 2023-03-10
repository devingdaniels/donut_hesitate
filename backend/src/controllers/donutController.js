// Handle erros on async functions
const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const fakeData = require("../fakeData");

const getDonuts = asyncHandler(async (req, res) => {
  if (process.env.MODE === "development") {
    res.status(200).json(fakeData.donuts);
  } else {
    const query = "SELECT * FROM Donuts;";
    db.pool.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ message: "Server error" });
      } else {
        res.status(200).json(results);
      }
    });
  }
});

const createDonut = asyncHandler(async (req, res) => {
  const { donut_name, donut_price } = req.body;
  const query = `INSERT INTO Donuts (donut_name, price) VALUES ('${donut_name}', '${donut_price}')`;
  // Execute the SQL insert statements
  db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(201).json({ message: "Donut added successfully" });
    }
  });
});

const editDonut = asyncHandler(async (req, res) => {
  const { donut_id, donut_name, price } = req.body;
  const query = `UPDATE Donuts SET donut_name = '${donut_name}', price = '${price}' WHERE donut_id = ${donut_id}`;
  // Execute the SQL insert statements
  db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res
        .status(200)
        .json({ message: " edited successfully", donut_id: donut_id });
    }
  });
});

const deleteDonut = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/donutcontroller/deleteDonut");
  const { donut_id } = req.body;
  const query = `DELETE FROM Donuts WHERE Donuts.donut_id = ${donut_id}`;
  // Execute the SQL insert statement
  db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res
        .status(200)
        .json({ donut_id: donut_id, message: "delete successful" });
    }
  });
});

module.exports = {
  getDonuts,
  createDonut,
  editDonut,
  deleteDonut,
};
