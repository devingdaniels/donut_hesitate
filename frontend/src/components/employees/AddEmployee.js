import { useState } from "react";
import { toastify } from "../../utilities/toastify";

import axios from "axios";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    employee_name: "",
    shift_worked: "",
  });

  const addEmployee = async (e) => {
    // Prevent page reload
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8543/api/employees/`,
        employee
      );
      const data = response.data;
      if (response.status === 200) {
        toastify(`Successfully added ${data.employee_name}...`);
      } else {
        toastify(`Error addeding ${employee.employee_name}...`);
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setEmployee({
      employee_name: "",
      shift_worked: "",
    });
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
