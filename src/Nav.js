import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import SetupBank from "./components/setupBank";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h3>Logo</h3>
      <button onClick={SetupBank}>SetupBank Only Once</button>
      <ul className="nav-links">
        <Link style={navStyle} to="/users">
          <li>users</li>
        </Link>
        <Link style={navStyle} to="/deposit">
          <li>deposit</li>
        </Link>
        <Link style={navStyle} to="/withdraw">
          <li>withdraw</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
