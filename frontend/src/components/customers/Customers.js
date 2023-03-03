import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import AddCustomer from "./AddCustomer";
import { toastify } from "../../utilities/toastify";
import axios from "axios";

function Customers() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);

  const editCustomer = (customer) => {
    console.log("before Navigate: ", customer);
    navigate("edit-customer", { state: customer });
  };

  const deleteCustomer = async (customer) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_STRING}/customers/${customer.customer_id}`,
        { data: customer }
      );
      const data = response.data;
      console.log(data);
      if (response.status === 200) {
        toastify(`${data.customer_id} deleted succefully`);
      } else {
        toastify("Error deleting customer");
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
    getCustomers();
  };

  const getCustomers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_STRING}/customers`
      );
      console.log(response);
      const data = response.data;
      if (response.status === 200) {
        setCustomers(data);
      } else {
        toastify("Error getting customers in backend");
      }
      console.log(data);
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
