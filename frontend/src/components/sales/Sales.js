import { useState, useEffect } from "react";
// Components
import NewSale from "./NewSale";
import axios from "axios";

function Sales() {
  const [sales, setSales] = useState([]);

  const addNewSale = (sale) => {
    setSales((sales) => [...sales, sale]); // delete this
    console.log(sale);
  };

  const getSales = async () => {
    try {
      const response = await axios.get("http://localhost:8543/api/sales");
      const data = response.data;
      setSales(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSales();
  }, []);

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
