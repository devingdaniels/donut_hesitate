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

const employees = [
  {
    employee_id: "1",
    employee_name: "John Doe",
    shift_worked: "2022-12-20",
  },
  {
    employee_id: "2",
    employee_name: "Steve Doe",
    shift_worked: "2022-12-12",
  },
  {
    employee_id: "3",
    employee_name: "Eva Doey2",
    shift_worked: "2022-12-20",
  },
];

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

const customers = [
  {
    customer_id: "1",
    customer_name: "Sarah Jane",
    email: "sarah.jane@gmail.com",
    phone_number: "541-456-7890",
  },
  {
    customer_id: "2",
    customer_name: "Ralphy Johnson",
    email: "ralphy.johnson@gmail.com",
    phone_number: "987-123-7890",
  },
  {
    customer_id: "3",
    customer_name: "Pickle Rick",
    email: "pickle.rick@gmail.com",
    phone_number: "625-123-4321",
  },
];

module.exports = {
  donuts,
  customers,
  employees,
  sales,
};
