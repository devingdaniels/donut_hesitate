import { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AddDonut from "./AddDonut";
import axios from "axios";

function Donuts({}) {
  const navigate = useNavigate();
  const [donuts, setDonuts] = useState([]);

  const editDonut = async (donut) => {
    navigate("edit-donut", { state: donut });
  };

  const deleteDonut = async (donut) => {
    try {
      const response = await axios.delete(
        `http://localhost:8543/api/donuts/${donut.donut_id}`,
        { data: donut }
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getDonuts = async () => {
    try {
      const response = await axios.get("http://localhost:8543/api/donuts");
      const data = response.data;
      setDonuts(data);
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
              <th>donut_id</th>
              <th>donut_name</th>
              <th>price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {donuts.map((donut) => (
              <tr key={donut.donut_id}>
                <td>{donut.donut_id}</td>
                <td>{donut.donut_name}</td>
                <td>$ {donut.price}</td>
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
        <AddDonut />
      </section>
    </div>
  );
}

export default Donuts;
