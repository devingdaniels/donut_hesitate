import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toastify } from "../../utilities/toastify";

import axios from "axios";

function EditEmployee() {
  const navigate = useNavigate();
  const location = useLocation();
  // State
  const [updatedEmployee, setUpdatedEmployee] = useState({
    employee_id: location.state.employee_id,
    employee_name: location.state.employee_name,
    shift_worked: location.state.shift_worked,
  });

  const updateEmployee = async (e) => {
    // Prevent page reload
    e.preventDefault();

    if (updatedEmployee.employee_name !== location.state.employee_name) {
      let URL = "";
      if (process.env.REACT_APP_MODE === "production") {
        URL = process.env.REACT_APP_API_STRING_PRO;
      } else {
        // Build development string at localhost
        URL = process.env.REACT_APP_API_STRING_DEV;
      }
      try {
        const response = await axios.put(`${URL}/employees/`, updatedEmployee);
        const data = response.data;
        if (response.status === 200) {
          toastify(data.message);
        } else {
          console.log(data);
          toastify(data.message);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      toastify(`No changes to make...`);
    }
    navigate("/employees");
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={updateEmployee} className="create-data-form">
        <input
          type="text"
          defaultValue={location.state.employee_name}
          onChange={(e) =>
            setUpdatedEmployee({
              ...updatedEmployee,
              employee_name: e.target.value,
            })
          }
          required
        ></input>
        <button
          className="submit-button"
          type="button"
          onClick={() => navigate("/employees")}
        >
          Cancel
        </button>
        <button type="submit" className="submit-button ">
          Update Employee
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;
