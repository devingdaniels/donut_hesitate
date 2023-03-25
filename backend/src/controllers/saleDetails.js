// Handle erros on async functions
const asyncHandler = require("express-async-handler");
const db = require("../config/db");

const getSaleDetails = asyncHandler(async (req, res) => {
  let insertFlag = false;
  // Query string
  const query1 = `INSERT INTO Sales_detail (sale_id, donut_id)
  SELECT Sales.sale_id, Donuts.donut_id
  FROM Sales
  INNER JOIN Donuts ON 1=1
  WHERE NOT EXISTS (
    SELECT *
    FROM Sales_detail
    WHERE Sales_detail.sale_id = Sales.sale_id
    AND Sales_detail.donut_id = Donuts.donut_id
  );`;
  // Execute the SQL insert statement
  db.pool.query(query1, (err, result) => {
    if (err) {
      console.log(err);
      insertFlag = true;
    } else if (!insertFlag) {
      // Now get all the sales_details
      const query2 = "SELECT * FROM Sales_detail;";
      db.pool.query(query2, (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error getting sales_details rows" });
        } else {
          res.status(200).json(results);
        }
      });
    }
  });
  // Send error
  if (insertFlag) {
    res
      .status(500)
      .json({ message: "Error inserting foreign keys into sales_detail" });
  }
});

module.exports = {
  getSaleDetails,
};
