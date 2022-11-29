import React from "react";
import "./WeatherDetails.scss";
import WeatherItem from "./SubComponents/WeatherItem";

function WeatherDetails(props) {
  return (
    <div className="weather-det-wrapper">
      {props.data?.map((element) => {
        return <WeatherItem key={element.dt} item={element} />;
      })}
    </div>
  );
}

export default WeatherDetails;
