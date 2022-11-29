import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header-wrapper">
      <input placeholder="Type a city name" className="city-input" />
      <button className="find-btn">Find Weather</button>
    </div>
  );
}

export default Header;
