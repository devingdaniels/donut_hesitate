// Handle erros on async functions
const asyncHandler = require("express-async-handler");

const getCustomers = asyncHandler(async (req, res) => {
  const customers = [
    {
      id: "1",
      customer_name: "Sarah Jane",
      email: "sarah.jane@gmail.com",
      phone_number: "541-456-7890",
    },
    {
      id: "2",
      customer_name: "Ralphy Johnson",
      email: "ralphy.johnson@gmail.com",
      phone_number: "987-123-7890",
    },
    {
      id: "3",
      customer_name: "Pickle Rick",
      email: "pickle.rick@gmail.com",
      phone_number: "625-123-4321",
    },
  ];
  // DELETE DONUT ARRAY ABOVE AND CODE SQL SELECT STATEMENT HERE

  res.status(200).json(customers);
});

const createCustomer = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/customercontroller/createcustomer");
  res.status(200).json(req.body);
});

const editCustomer = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/customercontroller/editcustomer");
  res.status(200).json(req.body);
});

const deleteCustomer = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/customercontroller/deletecustomer");

  res.status(200).json(req.params);
});

module.exports = {
  getCustomers,
  createCustomer,
  editCustomer,
  deleteCustomer,
};
