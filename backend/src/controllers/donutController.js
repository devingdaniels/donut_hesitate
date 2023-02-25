// Handle erros on async functions
const asyncHandler = require("express-async-handler");

const getDonuts = asyncHandler(async (req, res) => {
  const donuts = [
    {
      donut_id: "1",
      donut_name: "Jelly Doughnut",
      price: ".99",
    },
    {
      donut_id: "2",
      donut_name: "Frosted Doughnut",
      price: ".99",
    },
    {
      donut_id: "3",
      donut_name: "Doughnut Hole",
      price: "1.59",
    },
    {
      donut_id: "4",
      donut_name: "Fritter",
      price: "2.29",
    },
  ];

  // DELETE DONUT ARRAY ABOVE AND CODE SQL SELECT STATEMENT HERE

  res.status(200).json(donuts);
});

const createDonut = asyncHandler(async (req, res) => {
  res.status(200).json("donuts");
});

const editDonut = asyncHandler(async (req, res) => {
  res.status(200).json("donuts");
});

const deleteDonut = asyncHandler(async (req, res) => {
  console.log("backend/src/controllers/donutcontroller/deleteDonut");

  res.status(200).json(req.params);
});

module.exports = {
  getDonuts,
  createDonut,
  editDonut,
  deleteDonut,
};
