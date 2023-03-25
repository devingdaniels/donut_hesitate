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
    let URL = "";
    if (process.env.REACT_APP_MODE === "production") {
      URL = process.env.REACT_APP_API_STRING_PRO;
    } else {
      // Build development string at localhost
      URL = process.env.REACT_APP_API_STRING_DEV;
    }
    try {
      const response = await axios.delete(
        `${URL}/employees/${employee.employee_id}`,
        { data: employee }
      );
      const data = response.data;
      if (response.status === 200) {
        toastify(data.message);
        console.log(data);
      } else {
        toastify(data.message);
        console.log(data.message);
      }
    } catch (error) {
      toastify(error);
      console.error(error);
    }
    // Update the UI
    getEmployees();
  };

  const getEmployees = async () => {
    let URL = "";
    if (process.env.REACT_APP_MODE === "production") {
      URL = process.env.REACT_APP_API_STRING_PRO;
    } else {
      // Build development string at localhost
      URL = process.env.REACT_APP_API_STRING_DEV;
    }
    try {
      const response = await axios.get(`${URL}/employees`);
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
              <th>ID</th>
              <th>Name</th>
              <th>Date Worked</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employee_id}>
                <td>{employee.employee_id}</td>
                <td>{employee.employee_name}</td>
                <td>{employee.shift_worked.toString().substring(0, 10)}</td>
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
        <AddEmployee getEmployees={getEmployees} />
      </section>
    </div>
  );
}

export default Employees;
