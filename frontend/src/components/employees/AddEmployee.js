import React, { useState } from "react";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    employee_name: null,
    shift_worked: null,
  });

  const addEmployee = (e) => {
    // Prevent page reload
    e.preventDefault();
    alert("Add Employee to DB");
    console.log(employee);
  };

  return (
    <div>
      <h2>New Employee</h2>
      <form onSubmit={addEmployee} className="create-data-form">
        <input
          placeholder="Name..."
          onChange={(e) =>
            setEmployee({ ...employee, employee_name: e.target.value })
          }
          required
        ></input>
        <input
          placeholder="shift_worked..."
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
