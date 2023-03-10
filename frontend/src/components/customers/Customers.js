import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { toastify } from "../../utilities/toastify";
import AddCustomer from "./AddCustomer";
import axios from "axios";

function Customers() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);

  const editCustomer = (customer) => {
    navigate("edit-customer", { state: customer });
  };

  const deleteCustomer = async (customer) => {
    let URL = "";
    if (process.env.REACT_APP_MODE === "production") {
      URL = process.env.REACT_APP_API_STRING_PRO;
    } else {
      // Build development string at localhost
      URL = process.env.REACT_APP_API_STRING_DEV;
    }
    try {
      const response = await axios.delete(
        `${URL}/customers/${customer.customer_id}`,
        { data: customer }
      );
      const data = response.data;
      if (response.status === 200) {
        toastify(`Customer with ID: ${data.customer_id} deleted`);
      } else {
        toastify(`${data.customer_id} not deleted`);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
    getCustomers();
  };

  const getCustomers = async () => {
    // Determine base API string
    let URL = "";
    if (process.env.REACT_APP_MODE === "production") {
      URL = process.env.REACT_APP_API_STRING_PRO;
    } else {
      // Build development string at localhost
      URL = process.env.REACT_APP_API_STRING_DEV;
    }
    try {
      const response = await axios.get(`${URL}/customers`);
      const data = response.data;
      if (response.status === 200) {
        setCustomers(data);
      } else {
        toastify(`${response.status}: ${response.message}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div>
      <section>
        <h2>Customers</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>customer_name</th>
              <th>email</th>
              <th>phone_number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.customer_id}>
                <td>{customer.customer_id}</td>
                <td>{customer.customer_name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone_number}</td>
                <td onClick={() => editCustomer(customer)}>
                  <AiOutlineEdit size={"25px"} className="edit-row-icon" />
                </td>
                <td onClick={() => deleteCustomer(customer)}>
                  <AiOutlineDelete size={"25px"} className="delete-row-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <AddCustomer getCustomers={getCustomers} />
      </section>
    </div>
  );
}

export default Customers;
