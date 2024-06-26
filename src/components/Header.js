import LOGO_URL from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login")
  return (
    <div className="header">
      <div className="div-logo">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          {/* <li><a href="/about">About Us</a></li> */}
          <li>About Us</li>
          {/* <li><Link to="/contact">Contact</Link></li> */}
          <li>Contact</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
