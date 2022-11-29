import React, { useEffect, useState } from "react";
import { getWeatherImage } from "../../../Utils/Utils";

function WeatherItem({ item }) {
  const [imgSrc, setImgSrc] = useState("unknown");
  let dataTime = new Date(item?.dt_txt);

  useEffect(() => {
    if (typeof item.weather[0] !== "undefined") {
      setImgSrc(getWeatherImage(item.weather[0].id));
    }
  }, []);

  return (
    <div className="temp-item-wrapper">
      <div>
        {dataTime.getHours()}:
        {dataTime.getMinutes() < 10
          ? "0" + dataTime.getMinutes()
          : dataTime.getMinutes()}
      </div>
      <div>
        <img src={require(`../../../img/weather-icons/${imgSrc}.svg`)} />
      </div>
      <div>{item?.main?.temp}&deg;C</div>
    </div>
  );
}

export default WeatherItem;
