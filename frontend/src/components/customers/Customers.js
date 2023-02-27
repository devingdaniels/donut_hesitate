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
    navigate("edit-customer", { state: customer });
  };

  const deleteCustomer = async (customer) => {
    try {
      const response = await axios.delete(
        `http://localhost:8543/api/customers/${customer.id}`,
        { data: customer }
      );
      const data = response.data;
      toastify(`${data.customer_name} (${data.id}) deleted succefully`);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:8543/api/customers");
      const data = response.data;
      setCustomers(data);
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
              <tr key={customer.id}>
                <td>{customer.id}</td>
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
        <AddCustomer />
      </section>
    </div>
  );
}

export default Customers;
