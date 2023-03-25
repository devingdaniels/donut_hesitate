import { useState } from "react";
import { toastify } from "../../utilities/toastify";

function AddCustomer({ fetchCustomer }) {
  const [customer, setCustomer] = useState({
    customer_name: "",
    email: "",
    phone_number: "",
  });

  const addCustomer = async (e) => {
    // Prevent page reload
    e.preventDefault();
    // Pass the customer to new sale
    toastify("Customer will be added after sale creation");
    fetchCustomer(customer);
  };

  return (
    <div className="add-customer-form">
      <h2>New Customer</h2>
      <form onSubmit={addCustomer} className="create-data-form">
        <input
          type="text"
          value={customer.customer_name}
          placeholder="Ex: John Doe"
          onChange={(e) =>
            setCustomer({ ...customer, customer_name: e.target.value })
          }
          required
        ></input>
        <input
          type="email"
          value={customer.email}
          placeholder="Ex: john.doe@gmail.com"
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          required
        ></input>
        <input
          value={customer.phone_number}
          placeholder="Ex: 123-456-6783"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
