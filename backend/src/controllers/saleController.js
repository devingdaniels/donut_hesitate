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
  const { quantity_of_donuts_sold, purchase_date, sale_amount } = req.body;

  const query = `INSERT INTO Sales (quantity_of_donuts_sold, purchase_date, sale_amount) VALUES ('${quantity_of_donuts_sold}', '${purchase_date}', '${sale_amount}')`;

  // Execute the SQL insert statement
  db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: "Sale added successfully" });
    }
  });
});

const editSale = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/saleController/editsale");
  const { sale_id, quantity_of_donuts_sold, purchase_date, sale_amount } =
    req.body;
  console.log(sale_id, quantity_of_donuts_sold, purchase_date, sale_amount);

  const query = `UPDATE Sales SET quantity_of_donuts_sold = '${quantity_of_donuts_sold}', purchase_date = '${purchase_date}', sale_amount = '${sale_amount}' WHERE sale_id = ${sale_id}`;

  db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: "Sale edited successfully" });
    }
  });
});

const deleteSale = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/saleController/deletesale");
  const { sale_id } = req.body;
  const query = `DELETE FROM Sales WHERE Sales.sale_id = ${sale_id}`;
  // Execute the SQL insert statement
  db.pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ sale_id: sale_id });
    }
  });
});

module.exports = {
  getSales,
  createSale,
  editSale,
  deleteSale,
};
