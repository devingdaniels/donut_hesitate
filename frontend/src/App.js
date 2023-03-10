import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage";
import Customers from "./components/customers/Customers";
import EditCustomer from "./components/customers/EditCustomer";
import Employees from "./components/employees/Employees";
import EditEmployee from "./components/employees/EditEmployee";
import Donuts from "./components/donuts/Donuts";
import EditDonut from "./components/donuts/EditDonut";
import Sales from "./components/sales/Sales";
import SalesDetails from "./components/sales_details/SalesDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/edit-customer" element={<EditCustomer />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/edit-employees" element={<EditEmployee />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/sales-detail" element={<SalesDetails />} />
        <Route path="/donuts" element={<Donuts />} />
        <Route path="/donuts/edit-donut" element={<EditDonut />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
