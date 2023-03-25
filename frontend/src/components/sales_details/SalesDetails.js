import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";
import { toastify } from "../../utilities/toastify";

function SalesDetails() {
  const [salesDetails, setSalesDetails] = useState([]);

  const fetchSalesDetails = async () => {
    let URL = "";
    if (process.env.REACT_APP_MODE === "production") {
      URL = process.env.REACT_APP_API_STRING_PRO;
    } else {
      // Build development string at localhost
      URL = process.env.REACT_APP_API_STRING_DEV;
    }
    try {
      const response = await axios.get(`${URL}/saleDetails`);
      const data = response.data;
      if (response.status === 200) {
        toastify(data.message);
        setSalesDetails(data);
      } else {
        toastify(data.message);
        console.log(data.message);
      }
    } catch (error) {
      toastify(error);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSalesDetails();
  }, []);

  return (
    <div>
      <section>
        <h2>Sales Details</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Donut ID</th>
              <th>Sale ID</th>
            </tr>
          </thead>
          <tbody>
            {salesDetails.map((salesDetail) => (
              <tr key={salesDetail.sale_detail_id}>
                <td>{salesDetail.sale_detail_id}</td>
                <td>{salesDetail.donut_id}</td>
                <td>{salesDetail.sale_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
export default SalesDetails;
