import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import AddEmployee from "./AddEmployee";
import { toastify } from "../../utilities/toastify";
import axios from "axios";

function Employees() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  const editEmployee = (employee) => {
    navigate("edit-employees", { state: employee });
  };

  const deleteEmployee = async (employee) => {
    try {
      const response = await axios.delete(
        `http://localhost:8543/api/employees/${employee.employee_id}`,
        { data: employee }
      );
      const data = response.data;
      toastify(`Deleting ${data.employee_name} (${data.employee_id})...`);
      console.log(data);
    } catch (error) {
      toastify(
        `Error deleting ${employee.employee_name} (${employee.employee_id})...`
      );
      console.error(error);
    }
  };

  const getEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8543/api/employees");
      const data = response.data;
      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

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
                  <AiOutlineEdit size={"25px"} className="edit-row-icon" />
                </td>
                <td onClick={() => deleteEmployee(employee)}>
                  <AiOutlineDelete size={"25px"} className="delete-row-icon" />
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
