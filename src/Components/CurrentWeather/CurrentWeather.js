import React from "react";
import clear from "../../img/weather-icons/clear.svg";
import partlycloudy from "../../img/weather-icons/partlycloudy.svg";
import "./CurrentWeather.scss";

function CurrentWeather() {
  return (
    <div className="temp-wrapper">
      <img src={partlycloudy} className="weather-img" />
      <div className="weather-title">overcast clouds</div>
      <div className="temp-det-wrapper">
        <span className="temp-det">Temprature</span>{" "}
        <span className="temp-num-wrapper">
          <span className="temp-num">10</span>&deg; to{" "}
          <span className="temp-num">11</span>&deg;C
        </span>
      </div>
      <div className="det-wrapper">
        Humidity&emsp;<span>78%</span>&emsp;Pressure&emsp;<span>1008.48</span>
      </div>
    </div>
  );
}

export default CurrentWeather;
