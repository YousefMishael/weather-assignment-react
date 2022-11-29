import React, { useState } from "react";
import "./Header.scss";

function Header(props) {
  const [cityName, setCityName] = useState("");

  function onNameChange(e) {
    setCityName(e.target.value);
  }

  return (
    <div className="header-wrapper">
      <input
        placeholder="Type a city name"
        className="city-input"
        value={cityName}
        onChange={onNameChange}
      />
      <button
        className={`find-btn ${props.bgColor}`}
        onClick={() => props.search(cityName)}
      >
        Find Weather
      </button>
    </div>
  );
}

export default Header;
