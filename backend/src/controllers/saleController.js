// Handle erros on async functions
const asyncHandler = require("express-async-handler");

const getSales = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/saleController/getSales");
  const sales = [
    {
      sale_id: "1",
      quantity_of_donuts_sold: "3",
      purchase_date: "8/23/25",
      sale_amount: "$4.99",
      customer_id: "1",
      employee_id: "3",
    },
    {
      sale_id: "2",
      quantity_of_donuts_sold: "12",
      purchase_date: "12/23/25",
      sale_amount: "$8.99",
      customer_id: "2",
      employee_id: "1",
    },
    {
      sale_id: "3",
      quantity_of_donuts_sold: "35",
      purchase_date: "12/23/22",
      sale_amount: "$21.99",
      customer_id: "3",
      employee_id: "2",
    },
  ];
  // DELETE DONUT ARRAY ABOVE AND CODE SQL SELECT STATEMENT HERE

  res.status(200).json(sales);
});

const createSale = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/saleController/createSale");
  res.status(200).json(req.body);
});

module.exports = {
  getSales,
  createSale,
};
