import { useState, useEffect } from "react";
import AddCustomer from "./AddCustomerHelper";
import {
  getCustomers,
  getEmployees,
  createCustomer,
} from "../../helperFunctions";

function NewSale({ createSale }) {
  const [toggle, setToggle] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [newCustomer, setNewCustomer] = useState(null);
  const [sale, setSale] = useState({
    quantity_of_donuts_sold: "",
    purchase_date: "",
    sale_amount: "",
    customer_id: null,
    employee_id: "",
  });

  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();
    // Determine if new customer was created or not

    if (newCustomer === null && sale.customer_id === null) {
      createSale(sale, null);
    } else if (newCustomer !== null) {
      const data = await createCustomer(newCustomer);
      const ID = data.id;
      createSale(sale, ID);
    } else {
      createSale(sale, sale.customer_id);
    }
    // Reset the form
    setSale({
      quantity_of_donuts_sold: "",
      purchase_date: "",
      sale_amount: "",
      customer_id: null,
      employee_id: employees[0].employee_id,
    });
  };

  const fetchCustomer = (customer) => {
    setNewCustomer(customer);
    setToggle(!toggle);
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      const customers = await getCustomers();
      setCustomers(customers);
    };
    const fetchEmployees = async () => {
      const employees = await getEmployees();
      setEmployees(employees);
      console.log(employees.length);
      if (employees.length > 0) {
        setSale({ ...sale, employee_id: employees[0].employee_id });
      }
    };
    fetchEmployees();
    fetchCustomers();
  }, []);

  return (
    <div className="new-sale-form">
      <h2>New Sale</h2>
      <form onSubmit={handleSubmit} className="create-data-form">
        <input
          type="number"
          placeholder="Quantity Sold..."
          value={sale.quantity_of_donuts_sold}
          onChange={(e) =>
            setSale({ ...sale, quantity_of_donuts_sold: e.target.value })
          }
          required
        ></input>
        <input
          type="date"
          placeholder="Purchase Date..."
          value={sale.purchase_date}
          onChange={(e) => setSale({ ...sale, purchase_date: e.target.value })}
          required
        ></input>
        <input
          type="text"
          placeholder="Subtotal..."
          value={sale.sale_amount}
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
              defaultValue={sale.customer_id}
            >
              {customers.map((customer) => {
                return (
                  <option
                    value={customer.customer_id}
                    key={customer.customer_id}
                  >
                    {customer.customer_name} ({customer.customer_id})
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
                  className="add-customer-button"
                  onClick={() => setToggle((toggle) => !toggle)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="add-customer-button"
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
            defaultValue={sale.employee_id}
            required
          >
            {employees.map((employee) => {
              return (
                <option value={employee.employee_id} key={employee.employee_id}>
                  {employee.employee_name} ({employee.employee_id})
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
            <AddCustomer fetchCustomer={fetchCustomer} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default NewSale;
