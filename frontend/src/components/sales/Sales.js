import { useState } from "react";
// Components
import NewSale from "./NewSale";

function Sales() {
  const [sales, setSales] = useState([
    {
      sale_id: "1",
      quantity_of_donuts_sold: "3",
      purchase_date: "8/23/25",
      sale_amount: "$4.99",
      customer_id: "1",
      employee_id: "3",
    },
    {
      sale_id: "2",
      quantity_of_donuts_sold: "12",
      purchase_date: "12/23/25",
      sale_amount: "$8.99",
      customer_id: "2",
      employee_id: "1",
    },
    {
      sale_id: "3",
      quantity_of_donuts_sold: "35",
      purchase_date: "12/23/22",
      sale_amount: "$21.99",
      customer_id: "3",
      employee_id: "2",
    },
  ]);

  const addNewSale = (sale) => {
    setSales((sales) => [...sales, sale]); // delete this
    console.log(sale);
    // Make HTTP request to server which will add the sale to the database and return updated sales list
    // Display loading symbol while this process takes place
  };

  return (
    <div>
      <section>
        <h2>Sales</h2>
        <table>
          <thead>
            <tr>
              <th>sale_id</th>
              <th>quantity_of_donuts_sold</th>
              <th>purchase_date</th>
              <th>sale_amount</th>
              <th>customer_id</th>
              <th>employee_id</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.sale_id}>
                <td>{sale.sale_id}</td>
                <td>{sale.quantity_of_donuts_sold}</td>
                <td>{sale.purchase_date}</td>
                <td>{sale.sale_amount}</td>
                <td>{sale.customer_id}</td>
                <td>{sale.employee_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <NewSale addNewSale={addNewSale} />
      </section>
    </div>
  );
}
export default Sales;
