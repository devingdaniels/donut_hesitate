import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
function EditDonut() {
  const navigate = useNavigate();
  const location = useLocation();
  // State
  const [updatedDonut, setUpdatedDonut] = useState({
    donut_id: location.state.donut_id,
    donut_name: location.state.donut_name,
    price: location.state.price,
  });

  const updateDonut = async (e) => {
    // Prevent page reload
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8543/api/donuts/`,
        updatedDonut
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    navigate("/donuts");
  };

  return (
    <div>
      <h2>Edit Donut</h2>
      <form onSubmit={updateDonut} className="create-data-form">
        <input
          type="text"
          defaultValue={location.state.donut_name}
          onChange={(e) =>
            setUpdatedDonut({
              ...updatedDonut,
              donut_name: e.target.value,
            })
          }
          required
        ></input>
        <input
          type="text"
          defaultValue={location.state.price}
          onChange={(e) =>
            setUpdatedDonut({
              ...updatedDonut,
              price: e.target.value,
            })
          }
          required
        ></input>
        <button
          className="submit-button"
          type="button"
          onClick={() => navigate("/donuts")}
        >
          Cancel
        </button>
        <button type="submit" className="submit-button">
          Update Donut
        </button>
      </form>
    </div>
  );
}

export default EditDonut;
