import React from "react";
import "./WeatherDetails.scss";
import WeatherItem from "./SubComponents/WeatherItem";

function WeatherDetails() {
  return (
    <div className="weather-det-wrapper">
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
    </div>
  );
}

export default WeatherDetails;
