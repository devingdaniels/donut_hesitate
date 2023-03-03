import { useState } from "react";
import { toastify } from "../../utilities/toastify";

import axios from "axios";

function AddCustomer({ getCustomers }) {
  const [customer, setCustomer] = useState({
    customer_name: "",
    email: "",
    phone_number: "",
  });

  const addCustomer = async (e) => {
    // Prevent page reload
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_STRING}/customers`,
        customer
      );
      if (response.status === 200) {
        toastify(`${customer.customer_name} successfully added.`);
      } else {
        toastify("New customer failed to insert.");
        console.log(response.status);
      }
    } catch (error) {
      console.error(error);
    }
    setCustomer({
      customer_name: "",
      email: "",
      phone_number: "",
    });
    // Get updated list of customers
    getCustomers();
  };

  return (
    <div>
      <h2>New Customer</h2>
      <form onSubmit={addCustomer} className="create-data-form">
        <input
          value={customer.customer_name}
          placeholder="Name..."
          onChange={(e) =>
            setCustomer({ ...customer, customer_name: e.target.value })
          }
          required
        ></input>
        <input
          value={customer.email}
          placeholder="Email..."
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          required
        ></input>
        <input
          value={customer.phone_number}
          placeholder="Phone..."
          onChange={(e) =>
            setCustomer({ ...customer, phone_number: e.target.value })
          }
          required
        ></input>
        <button type="submit" className="submit-button ">
          Add Customer
        </button>
      </form>
    </div>
  );
}

export default AddCustomer;
