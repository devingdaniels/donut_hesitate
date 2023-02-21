import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Donut from "../images/donut.png";

import "../styles/siteMenu.css";

import { elastic as Menu } from "react-burger-menu";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("1");
    }
  }, [location.pathname]);

  return (
    <header>
      <div className="header-item">
        <img
          className="donut-icon"
          onClick={() => {
            navigate("/");
          }}
          src={Donut}
          alt="donut icon"
          width={50}
          height={50}
        ></img>
      </div>
      <h1 className="header-item">Donut Hesitate</h1>
      <div className="header-item">
        <Menu right>
          <Link
            onClick={handleClick}
            className={active === "1" ? "active" : undefined}
            id={"1"}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={handleClick}
            className={active === "2" ? "active" : undefined}
            id={"2"}
            to="/customers"
          >
            Customers
          </Link>
          <Link
            onClick={handleClick}
            className={active === "3" ? "active" : undefined}
            id={"3"}
            to="/employees"
          >
            Employees
          </Link>
          <Link
            onClick={handleClick}
            className={active === "4" ? "active" : undefined}
            id={"4"}
            to="/sales"
          >
            Sales
          </Link>
          <Link
            onClick={handleClick}
            className={active === "5" ? "active" : undefined}
            id={"5"}
            to="/sales-detail"
          >
            Sales Detail
          </Link>
          <Link
            onClick={handleClick}
            className={active === "6" ? "active" : undefined}
            id={"6"}
            to="/donuts"
          >
            Donuts
          </Link>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
