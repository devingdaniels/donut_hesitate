import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toastify } from "../../utilities/toastify";

import axios from "axios";

function EditCustomer() {
  const navigate = useNavigate();
  const location = useLocation();
  // State
  const [updatedCustomer, setUpdatedCustomer] = useState({
    customer_id: location.state.customer_id,
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
      let URL = "";
      if (process.env.REACT_APP_MODE === "production") {
        URL = process.env.REACT_APP_API_STRING_PRO;
      } else {
        // Build development string at localhost
        URL = process.env.REACT_APP_API_STRING_DEV;
      }
      try {
        const response = await axios.put(`${URL}/customers`, updatedCustomer);
        const data = response.data;
        if (response.status === 200) {
          console.log(data.message);
          toastify(`Customer with ID: ${updatedCustomer.customer_id} updated`);
        } else {
          toastify(
            `Error updating customer with ID: ${updatedCustomer.customer_id}`
          );
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      toastify(`No changes to update...`);
    }
    setUpdatedCustomer({
      customer_id: "",
      customer_name: "",
      email: "",
      phone_number: "",
    });
    navigate("/customers");
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
          defaultValue={location.state.phone_number}
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
