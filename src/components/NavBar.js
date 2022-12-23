import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/bodyType">Body Type</Link>
      </div>
      <div>
        {" "}
        <Link to="/aboutUs">About Us</Link>
      </div>
      <div>
        {" "}
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
export default Navbar;
