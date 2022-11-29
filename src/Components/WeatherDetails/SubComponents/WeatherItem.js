import React from "react";
import clear from "../../../img/weather-icons/clear.svg";

function WeatherItem() {
  return (
    <div className="temp-item-wrapper">
      <div>03:00</div>
      <div>
        <img src={clear} />
      </div>
      <div>8&deg;C</div>
    </div>
  );
}

export default WeatherItem;
