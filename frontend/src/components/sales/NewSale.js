import React, { useState } from "react";
import AddCustomer from "../customers/AddCustomer";

function NewSale({ addNewSale }) {
  const [toggle, setToggle] = useState(false);

  const [sale, setSale] = useState({
    quantity_of_donuts_sold: null,
    purchase_date: null,
    sale_amount: null,
    customer_id: null,
    employee_id: null,
  });

  const [employees, setEmployees] = useState([
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
      employee_name: "Eva Doe",
      shift_worked: "2022-12-20",
    },
  ]);

  const [customers, setCustomers] = useState([
    {
      id: "0",
      customer_name: "Guest",
      email: "guest.guest@guest.com",
      phone_number: "000000000",
    },
    {
      id: "1",
      customer_name: "Sarah Jane",
      email: "Sarah.Jane@gmail.com",
      phone_number: "541-456-7890",
    },
    {
      id: "2",
      customer_name: "Ralphy Johnson",
      email: "Ralphy.Johnson@gmail.com",
      phone_number: "987-123-7890",
    },
    {
      id: "3",
      customer_name: "Pickle Rick",
      email: "Pickle.Rick@gmail.com",
      phone_number: "625-123-4321",
    },
  ]);

  const newSale = (e) => {
    // Prevent page reload
    e.preventDefault();
    alert("Add sale to DB");
    addNewSale(sale);
  };

  return (
    <div>
      <h2>New Sale</h2>
      <form onSubmit={newSale} className="create-data-form">
        <input
          type="number"
          placeholder="quantity_of_donuts_sold..."
          onChange={(e) =>
            setSale({ ...sale, quantity_of_donuts_sold: e.target.value })
          }
          required
        ></input>
        <input
          type="date"
          placeholder="purchase_date..."
          onChange={(e) => setSale({ ...sale, purchase_date: e.target.value })}
          required
        ></input>
        <input
          type="text"
          placeholder="sale_amount..."
          onChange={(e) => setSale({ ...sale, sale_amount: e.target.value })}
          required
        ></input>
        <div className="new-existing-customers-form">
          <div>
            <p>Existing Customers</p>
            <select
              onChange={(e) =>
                setSale({ ...sale, customer_id: e.target.value })
              }
              required
            >
              {customers.map((customer) => {
                return (
                  <option value={customer.id} key={customer.id}>
                    {customer.customer_name} ({customer.id})
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <p>Create customer</p>
            {toggle ? (
              <>
                <button
                  type="button"
                  onClick={() => setToggle((toggle) => !toggle)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setToggle((toggle) => !toggle)}
                >
                  Add Customer
                </button>
              </>
            )}
          </div>

          <p>Employees</p>
          <select
            onChange={(e) => setSale({ ...sale, employee_id: e.target.value })}
            required
          >
            {employees.map((employee) => {
              return (
                <option value={employee.employee_id} key={employee.employee_id}>
                  {employee.employee_name}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="submit-button ">
          Create
        </button>
      </form>
      <div>
        {toggle ? (
          <>
            <AddCustomer />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default NewSale;
