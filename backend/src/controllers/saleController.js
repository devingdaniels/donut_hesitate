// Handle erros on async functions
const asyncHandler = require("express-async-handler");

const db = require("../config/db");

const getSales = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/saleController/getSales");
  const query = "SELECT * FROM Sales;";

  db.pool.query(query, (err, results) => {
    res.status(200).json(results);
  });
});

const createSale = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/saleController/createSale");
  const {
    quantity_of_donuts_sold,
    purchase_date,
    sale_amount,
    customer_id,
    employee_id,
  } = req.body;
  console.log(req.body);

  // const query = `INSERT INTO Sales (quantity_of_donuts_sold, purchase_date, sale_amount, employee_id, customer_id) VALUES ('${quantity_of_donuts_sold}', '${purchase_date}', '${sale_amount}', '${employee_id}', ${customer_id})`;

  const query =
    "INSERT INTO Sales (quantity_of_donuts_sold, purchase_date, sale_amount, customer_id, employee_id) VALUES (?, ?, ?, ?, ?)";
  const values = [
    quantity_of_donuts_sold,
    purchase_date,
    sale_amount,
    customer_id || null,
    employee_id,
  ];

  // Execute the SQL insert statement
  db.pool.query(query, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
    } else {
      console.log(result);
      res.status(200).json({ message: "Sale added successfully" });
    }
  });
});

module.exports = {
  getSales,
  createSale,
};
