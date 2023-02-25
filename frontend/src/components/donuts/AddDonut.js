import React, { useState } from "react";
import axios from "axios";

function AddDonut() {
  const [donut, setDonut] = useState({
    donut_name: null,
    donut_price: null,
  });

  const addDonut = async (e) => {
    // Prevent page reload
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8543/api/donuts/`,
        donut
      );
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>New Donut</h2>
      <form onSubmit={addDonut} className="create-data-form">
        <input
          placeholder="Ex: Fritter, Jelly"
          onChange={(e) => setDonut({ ...donut, donut_name: e.target.value })}
          required
        ></input>
        <input
          placeholder="Ex: 2.79"
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
