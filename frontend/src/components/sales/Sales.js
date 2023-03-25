import { useState, useEffect } from "react";
// Components
import { toastify } from "../../utilities/toastify";
import NewSale from "./NewSale";
import axios from "axios";

function Sales() {
  const [sales, setSales] = useState([]);

  const createSale = async (sale, ID) => {
    const saleObj = {
      quantity_of_donuts_sold: sale.quantity_of_donuts_sold,
      purchase_date: sale.purchase_date,
      sale_amount: sale.sale_amount,
      customer_id: ID,
      employee_id: sale.employee_id,
    };

    let URL = "";
    if (process.env.REACT_APP_MODE === "production") {
      URL = process.env.REACT_APP_API_STRING_PRO;
    } else {
      // Build development string at localhost
      URL = process.env.REACT_APP_API_STRING_DEV;
    }
    try {
      const response = await axios.post(`${URL}/sales`, saleObj);
      const data = response.data;
      if (response.status === 200) {
        toastify(data.message);
        console.log(data);
      } else {
        toastify(data.message);
        console.log(data.message);
      }
    } catch (error) {
      toastify(error);
      console.error(error);
    }
    // Get updated sales
    getSales();
  };

  const getSales = async () => {
    let URL = "";
    if (process.env.REACT_APP_MODE === "production") {
      URL = process.env.REACT_APP_API_STRING_PRO;
    } else {
      // Build development string at localhost
      URL = process.env.REACT_APP_API_STRING_DEV;
    }
    try {
      const response = await axios.get(`${URL}/sales`);
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
              <th>ID</th>
              <th>Quantity</th>
              <th>Purchase Date</th>
              <th>Subtotal</th>
              <th>Customer ID</th>
              <th>Employee ID</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.sale_id}>
                <td>{sale.sale_id}</td>
                <td>{sale.quantity_of_donuts_sold}</td>
                <td>{sale.purchase_date.toString().substring(0, 10)}</td>
                <td>${sale.sale_amount}</td>
                <td>{sale.customer_id}</td>
                <td>{sale.employee_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <NewSale createSale={createSale} />
      </section>
    </div>
  );
}
export default Sales;
