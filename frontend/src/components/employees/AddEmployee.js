import { useState } from "react";
import { toastify } from "../../utilities/toastify";

import axios from "axios";

function AddEmployee({ getEmployees }) {
  const [employee, setEmployee] = useState({
    employee_name: "",
    shift_worked: "",
  });

  const addEmployee = async (e) => {
    // Prevent page reload
    e.preventDefault();
    let URL = "";
    if (process.env.REACT_APP_MODE === "production") {
      URL = process.env.REACT_APP_API_STRING_PRO;
    } else {
      // Build development string at localhost
      URL = process.env.REACT_APP_API_STRING_DEV;
    }
    try {
      const response = await axios.post(`${URL}/employees`, employee);
      const data = response.data;
      if (response.status === 201) {
        toastify(`${employee.employee_name} ${data.message}`);
      } else {
        toastify(`Error adding ${employee.employee_name}...`);
      }
    } catch (error) {
      console.error(error);
    }
    setEmployee({
      employee_name: "",
      shift_worked: "",
    });
    // Get updated list
    getEmployees();
  };

  return (
    <div>
      <h2>New Employee</h2>
      <form onSubmit={addEmployee} className="create-data-form">
        <input
          placeholder="Name..."
          value={employee.employee_name}
          onChange={(e) =>
            setEmployee({ ...employee, employee_name: e.target.value })
          }
          required
        ></input>
        <input
          type="date"
          placeholder="shift_worked..."
          value={employee.shift_worked}
          onChange={(e) =>
            setEmployee({ ...employee, shift_worked: e.target.value })
          }
          required
        ></input>
        <button type="submit" className="submit-button ">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
