import React from "react";

import { Link } from "react-router-dom";

// Images
import Donut from "../images/donut.png";

function Header() {
  return (
    <header className="header-icon-title">
      <img src={Donut} width={100} height={100}></img>
      <h1>Donut Hesitate</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/employees">Employees</Link>
          </li>
          <li>
            <Link to="/sales">Sales</Link>
          </li>
          <li>
            <Link to="/sales-detail">Sales Detail</Link>
          </li>
          <li>
            <Link to="/donuts">Donuts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
