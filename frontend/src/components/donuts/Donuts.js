import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AddDonut from "./AddDonut";

function Donuts({}) {
  const navigate = useNavigate();
  const [donuts, setDonuts] = useState([
    {
      donut_id: "1",
      donut_name: "chocolate",
      price: "2.5",
    },
    {
      donut_id: "2",
      donut_name: "strawberry",
      price: "2.5",
    },
    {
      donut_id: "3",
      donut_name: "blueberry",
      price: "2.5",
    },
    {
      donut_id: "4",
      donut_name: "mocha",
      price: "3",
    },
  ]);

  const editDonut = (donut) => {
    console.log("Donut before edit: ", donut);
    navigate("edit-donut", { state: donut });
  };

  const deleteDonut = (donut) => {
    alert("delete donut from Db");

    console.log(donut);
  };

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
                <td>{donut.price}</td>
                <td onClick={() => editDonut(donut)}>
                  <AiOutlineEdit />
                </td>
                <td onClick={() => deleteDonut(donut)}>
                  <AiOutlineDelete />
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
