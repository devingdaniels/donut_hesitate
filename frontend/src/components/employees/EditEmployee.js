import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toastify } from "../../utilities/toastify";

function EditEmployee() {
  const navigate = useNavigate();
  const location = useLocation();
  // State
  const [updatedEmployee, setUpdatedEmployee] = useState({
    employee_id: location.state.employee_id,
    employee_name: location.state.employee_name,
    shift_worked: location.state.shift_worked,
  });

  const updateEmployee = (e) => {
    // Prevent page reload
    e.preventDefault();

    if (updatedEmployee.employee_name !== location.state.employee_name) {
      toastify(`Updating ${updatedEmployee.employee_name}...`);
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
