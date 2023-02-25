import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toastify } from "../../utilities/toastify";

import axios from "axios";

function EditCustomer() {
  const navigate = useNavigate();
  const location = useLocation();
  // State
  const [updatedCustomer, setUpdatedCustomer] = useState({
    id: location.state.id,
    customer_name: location.state.customer_name,
    email: location.state.email,
    phone_number: location.state.phone_number,
  });

  const updateCustomer = async (e) => {
    // Prevent page reload
    e.preventDefault();

    if (
      updatedCustomer.customer_name !== location.state.customer_name ||
      updatedCustomer.email !== location.state.email ||
      updatedCustomer.phone_number !== location.state.phone_number
    ) {
      try {
        const response = await axios.put(
          `http://localhost:8543/api/customers/`,
          updatedCustomer
        );
        const data = response.data;
        toastify(`CustomerID: ${data.id} updated.`);
      } catch (error) {
        console.error(error);
      }
    } else {
      toastify(`No changes to update...`);
    }

    navigate("/customers");
    setUpdatedCustomer({
      id: "",
      customer_name: "",
      email: "",
      phone_number: "",
    });
  };

  return (
    <div>
      <h2>Edit Customer</h2>
      <form onSubmit={updateCustomer} className="create-data-form">
        <input
          type="text"
          defaultValue={location.state.customer_name}
          onChange={(e) =>
            setUpdatedCustomer({
              ...updatedCustomer,
              customer_name: e.target.value,
            })
          }
          required
        ></input>
        <input
          type="email"
          defaultValue={location.state.email}
          onChange={(e) =>
            setUpdatedCustomer({
              ...updatedCustomer,
              email: e.target.value,
            })
          }
          required
        ></input>
        <input
          type="text"
          defaultValue={location.state.phone_number}
          onChange={(e) =>
            setUpdatedCustomer({
              ...updatedCustomer,
              phone_number: e.target.value,
            })
          }
          required
        ></input>
        <button
          className="submit-button"
          type="button"
          onClick={() => navigate("/customers")}
        >
          Cancel
        </button>
        <button type="submit" className="submit-button ">
          Update Customer
        </button>
      </form>
    </div>
  );
}

export default EditCustomer;
