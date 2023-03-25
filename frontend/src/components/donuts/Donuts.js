import { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AddDonut from "./AddDonut";
import axios from "axios";
import { toastify } from "../../utilities/toastify";

function Donuts({}) {
  const navigate = useNavigate();
  const [donuts, setDonuts] = useState([]);

  const editDonut = async (donut) => {
    // edit-donut page renders form for updating donut info
    navigate("edit-donut", { state: donut });
  };

  const deleteDonut = async (donut) => {
    // Determine base API string
    let URL = "";
    if (process.env.REACT_APP_MODE === "production") {
      URL = process.env.REACT_APP_API_STRING_PRO;
    } else {
      // Build development string at localhost
      URL = process.env.REACT_APP_API_STRING_DEV;
    }
    try {
      const response = await axios.delete(`${URL}/donuts/${donut.donut_id}`, {
        data: donut,
      });
      const data = response.data;
      toastify(`Donut with ID: ${data.donut_id} ${data.message}`);
    } catch (error) {
      console.error(error);
    }
    // Get updated donuts
    getDonuts();
  };

  const getDonuts = async () => {
    // Determine base API string
    let URL = "";
    if (process.env.REACT_APP_MODE === "production") {
      URL = process.env.REACT_APP_API_STRING_PRO;
    } else {
      // Build development string at localhost
      URL = process.env.REACT_APP_API_STRING_DEV;
    }
    try {
      const response = await axios.get(`${URL}/donuts`);
      const data = response.data;
      if (response.status === 200) {
        setDonuts(data);
      } else {
        toastify(`${response.status}: ${response.message}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDonuts();
  }, []);

  return (
    <div>
      <section>
        <h2>Donuts</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {donuts.map((donut) => (
              <tr key={donut.donut_id}>
                <td>{donut.donut_id}</td>
                <td>{donut.donut_name}</td>
                <td>${donut.price}</td>
                <td onClick={() => editDonut(donut)}>
                  <AiOutlineEdit size={"25px"} className="edit-row-icon" />
                </td>
                <td onClick={() => deleteDonut(donut)}>
                  <AiOutlineDelete size={"25px"} className="delete-row-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <AddDonut getDonuts={getDonuts} />
      </section>
    </div>
  );
}

export default Donuts;
