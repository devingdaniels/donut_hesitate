import React, { useState } from "react";
import axios from "axios";
import { toastify } from "../../utilities/toastify";

function AddDonut({ getDonuts }) {
  const [donut, setDonut] = useState({
    donut_name: "",
    donut_price: "",
  });

  const addDonut = async (e) => {
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
      const response = await axios.post(`${URL}/donuts`, donut);
      if (response.status === 201) {
        const data = response.data;
        toastify(data.message);
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.error(error);
    }
    setDonut({
      donut_name: "",
      donut_price: "",
    });
    // Get the updated list
    getDonuts();
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
