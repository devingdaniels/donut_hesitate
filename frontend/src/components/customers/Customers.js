import { useState } from "react";

// Icons
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

// Components
import AddCustomer from "./AddCustomer";

import { useNavigate } from "react-router-dom";

function Customers({}) {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([
    {
      id: "1",
      customer_name: "Sarah Jane",
      email: "Sarah.Jane@gmail.com",
      phone_number: "541-456-7890",
    },
    {
      id: "2",
      customer_name: "Ralphy Johnson",
      email: "Ralphy.Johnson@gmail.com",
      phone_number: "987-123-7890",
    },
    {
      id: "3",
      customer_name: "Pickle Rick",
      email: "Pickle.Rick@gmail.com",
      phone_number: "625-123-4321",
    },
  ]);

  const editCustomer = (customer) => {
    // This can either redirect to a new page for editing the customer information or we can do in-line editing
    console.log("Customer before edit: ", customer);
    navigate("edit-customer", { state: customer });
  };

  const deleteCustomer = (customer) => {
    // This can either redirect to a new page for editing the customer information or we can do in-line editing
    alert("delete customer from Db");
    console.log(customer);
  };

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
                  <AiOutlineEdit />
                </td>
                <td onClick={() => deleteCustomer(customer)}>
                  <AiOutlineDelete />
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
