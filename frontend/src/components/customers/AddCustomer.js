import { useState } from "react";
import { toastify } from "../../utilities/toastify";

function AddCustomer() {
  const [customer, setCustomer] = useState({
    customer_name: "",
    email: "",
    phone_number: "",
  });

  const addCustomer = (e) => {
    // Prevent page reload
    e.preventDefault();
    toastify(`Successfully added ${customer.customer_name}...`);
    setCustomer({
      customer_name: "",
      email: "",
      phone_number: "",
    });
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
