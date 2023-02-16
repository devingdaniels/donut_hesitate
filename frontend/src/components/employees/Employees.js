import { useState } from "react";

// Icons
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

// Components
import AddEmployee from "./AddEmployee";

import { useNavigate } from "react-router-dom";

function Employees({}) {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([
    {
      employee_id: "1",
      employee_name: "John Doe",
      shift_worked: "2022-12-20",
    },
    {
      employee_id: "2",
      employee_name: "Steve Doe",
      shift_worked: "2022-12-12",
    },
    {
      employee_id: "3",
      employee_name: "Eva Doe",
      shift_worked: "2022-12-20",
    },
  ]);

  const editEmployee = (employee) => {
    // This can either redirect to a new page for editing the employee information or we can do in-line editing
    console.log("Employee before edit: ", employee);
    navigate("edit-employees", { state: employee });
  };

  const deleteEmployee = (employee) => {
    // This can either redirect to a new page for editing the employees information or we can do in-line editing
    alert("delete employee from Db");
    console.log(employee);
  };

  return (
    <div>
      <section>
        <h2>Employees</h2>
        <table>
          <thead>
            <tr>
              <th>employee_id</th>
              <th>employee_name</th>
              <th>shift_worked</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employee_id}>
                <td>{employee.employee_id}</td>
                <td>{employee.employee_name}</td>
                <td>{employee.shift_worked}</td>
                <td onClick={() => editEmployee(employee)}>
                  <AiOutlineEdit />
                </td>
                <td onClick={() => deleteEmployee(employee)}>
                  <AiOutlineDelete />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <AddEmployee />
      </section>
    </div>
  );
}

export default Employees;
