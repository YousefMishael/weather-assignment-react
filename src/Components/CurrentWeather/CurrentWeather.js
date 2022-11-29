import React, { useEffect, useState } from "react";
import "./CurrentWeather.scss";
import { getWeatherImage } from "../../Utils/Utils";

function CurrentWeather({ data }) {
  const [imgSrc, setImgSrc] = useState("unknown");

  useEffect(() => {
    if (typeof data !== "undefined") {
      setImgSrc(getWeatherImage(data.weather[0].id));
    }
  }, [data]);

  return (
    <div className="temp-wrapper">
      <img
        src={require(`../../img/weather-icons/${imgSrc}.svg`)}
        className="weather-img"
      />
      <div className="weather-title">
        {typeof data !== "undefined" ? data.weather[0].description : ""}
      </div>
      <div className="temp-det-wrapper">
        <span className="temp-det">Temperature</span>{" "}
        <span className="temp-num-wrapper">
          <span className="temp-num">
            {/* converting from Kelvin to Celsius ==> K - 273.15 */}
            {data?.main?.temp_min}
          </span>
          &deg; to <span className="temp-num">{data?.main?.temp_max}</span>
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
