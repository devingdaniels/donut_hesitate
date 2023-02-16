import { useState } from "react";

function SalesDetails() {
  const [salesDetails, setSalesDetails] = useState([
    {
      sale_detail_id: "1",
      donut_id: "5",
      sale_id: "6",
    },
    {
      sale_detail_id: "2",
      donut_id: "6",
      sale_id: "8",
    },
    {
      sale_detail_id: "3",
      donut_id: "9",
      sale_id: "1",
    },
  ]);

  return (
    <div>
      <section>
        <h2>Sales Details</h2>
        <table>
          <thead>
            <tr>
              <th>sale_detail_id</th>
              <th>donut_id</th>
              <th>sale_id</th>
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
