import React, { useState } from "react";

function AddCustomer() {
  const [customer, setCustomer] = useState({
    customer_name: null,
    email: null,
    phone_number: null,
  });

  const addCustomer = (e) => {
    // Prevent page reload
    e.preventDefault();
    alert("Add customer to DB");
    console.log(customer);
  };

  return (
    <div>
      <h2>New Customer</h2>
      <form onSubmit={addCustomer} className="create-data-form">
        <input
          placeholder="Name..."
          onChange={(e) =>
            setCustomer({ ...customer, customer_name: e.target.value })
          }
          required
        ></input>
        <input
          placeholder="Email..."
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          required
        ></input>
        <input
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
