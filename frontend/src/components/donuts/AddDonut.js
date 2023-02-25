import React, { useState } from "react";
import axios from "axios";
import { toastify } from "../../utilities/toastify";

function AddDonut() {
  const [donut, setDonut] = useState({
    donut_name: "",
    donut_price: "",
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
        toastify(`${donut.donut_name} successfully added.`);
      } else {
        console.log(response.status);
      }
    } catch (error) {
      toastify(`Error adding: ${donut.donut_name}`);
      console.error(error);
    }
    setDonut({
      donut_name: "",
      donut_price: "",
    });
  };

  return (
    <div>
      <h2>New Donut</h2>
      <form onSubmit={addDonut} className="create-data-form">
        <input
          placeholder="Ex: Fritter, Jelly"
          value={donut.donut_name}
          onChange={(e) => setDonut({ ...donut, donut_name: e.target.value })}
          required
        ></input>
        <input
          placeholder="Ex: 2.79"
          value={donut.donut_price}
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
