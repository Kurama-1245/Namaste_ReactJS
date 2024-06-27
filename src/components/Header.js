import LOGO_URL from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="div-logo">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li className="header-link">
            <Link to="/">Home</Link>
          </li>
          <li className="header-link">
            <Link to="/about">About Us</Link>
          </li>
          <li className="header-link">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="header-link">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
