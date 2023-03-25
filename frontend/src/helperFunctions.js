import axios from "axios";
import { toastify } from "./utilities/toastify";

const getEmployees = async () => {
  let URL = "";
  if (process.env.REACT_APP_MODE === "production") {
    URL = process.env.REACT_APP_API_STRING_PRO;
  } else {
    // Build development string at localhost
    URL = process.env.REACT_APP_API_STRING_DEV;
  }
  try {
    const response = await axios.get(`${URL}/employees`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getCustomers = async () => {
  // Determine base API string
  let URL = "";
  if (process.env.REACT_APP_MODE === "production") {
    URL = process.env.REACT_APP_API_STRING_PRO;
  } else {
    // Build development string at localhost
    URL = process.env.REACT_APP_API_STRING_DEV;
  }
  try {
    const response = await axios.get(`${URL}/customers`);
    const data = response.data;
    if (response.status === 200) {
      return data;
    } else {
      toastify(`${response.status}: ${response.message}`);
    }
  } catch (error) {
    console.error(error);
  }
};

const createCustomer = async (customer) => {
  let URL = "";
  if (process.env.REACT_APP_MODE === "production") {
    URL = process.env.REACT_APP_API_STRING_PRO;
  } else {
    // Build development string at localhost
    URL = process.env.REACT_APP_API_STRING_DEV;
  }
  try {
    const response = await axios.post(`${URL}/customers`, customer);
    const data = response.data;
    if (response.status === 201) {
      return data;
    } else {
      toastify("New customer failed to insert.");
      console.log(response.status);
    }
  } catch (error) {
    console.error(error);
  }
};

export { getEmployees, getCustomers, createCustomer };
