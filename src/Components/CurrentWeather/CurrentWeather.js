import React, { useEffect, useState } from "react";
import "./CurrentWeather.scss";
import { getWeatherImage } from "../../Utils/Utils";

function CurrentWeather({ data }) {
  const [imgSrc, setImgSrc] = useState("unknown");

  useEffect(() => {
    console.log(data);
    if (typeof data !== "undefined") {
      console.log(data.weather[0].id);
      setImgSrc(getWeatherImage(data.weather[0].id));
    }
  }, [data]);

  return (
    <div className="temp-wrapper">
      <img
        src={require(`../../img/weather-icons/${imgSrc}.svg`)}
        className="weather-img"
      />
      <div className="weather-title">overcast clouds</div>
      <div className="temp-det-wrapper">
        <span className="temp-det">Temperature</span>{" "}
        <span className="temp-num-wrapper">
          <span className="temp-num">
            {/* converting from Kelvin to Celsius ==> K - 273.15 */}
            {(data?.main?.temp_min - 273.15).toFixed(2)}
          </span>
          &deg; to{" "}
          <span className="temp-num">
            {(data?.main?.temp_max - 273.15).toFixed(2)}
          </span>
          &deg;C
        </span>
      </div>
      <div className="det-wrapper">
        Humidity&emsp;<span>{data?.main?.humidity}%</span>
        &emsp;Pressure&emsp;<span>{data?.main?.pressure}</span>
      </div>
    </div>
  );
}

export default CurrentWeather;
