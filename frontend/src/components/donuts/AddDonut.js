import React, { useState } from "react";

function AddDonut() {
  const [donut, setDonut] = useState({
    donut_name: null,
    donut_price: null,
  });

  const addDonut = (e) => {
    // Prevent page reload
    e.preventDefault();
    alert("Add donut to DB");
    console.log(donut);
  };

  return (
    <div>
      <h2>New Donut</h2>
      <form onSubmit={addDonut} className="create-data-form">
        <input
          placeholder="Donut name..."
          onChange={(e) => setDonut({ ...donut, donut_name: e.target.value })}
          required
        ></input>
        <input
          placeholder="2.99..."
          onChange={(e) => setDonut({ ...donut, donut_price: e.target.value })}
          required
        ></input>
        <button type="submit" className="submit-button ">
          Add Donut
        </button>
      </form>
    </div>
  );
}

export default AddDonut;
