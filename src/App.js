import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import WeatherDetails from "./Components/WeatherDetails/WeatherDetails";
// import Data from "./Data/data.json";
import { fetData, getWeatherImage } from "./Utils/Utils";
import NoData from "./Components/NoData/NoData";

const API_KEY = "af441932e2d1e7834d21f0babed7e23b";

function App() {
  const [data, setData] = useState([]);
  const [bgColor, setBgColor] = useState("clear");

  useEffect(() => {
    // setData(Data.list?.slice(0, 8));
    search("Ramallah");
  }, []);

  function search(city) {
    try {
      //check if there is an internet connection
      if (navigator.onLine) {
        const resp = fetData(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${API_KEY}`
        );

        resp.then((res) => {
          if (res.cod === "200") {
            setData(res.list);
            setBgColor(getWeatherImage(res.list[0].weather[0].id));
          } else {
            setData([]);
          }
        });
      } else {
        setData([]);
      }
    } catch (e) {
      console.error(e);
      setData([]);
    }
  }

  return (
    <div className="app">
      <header className={`app__header ${bgColor}`}>
        <Header search={search} bgColor={bgColor} />
      </header>

      <main className={`app__main ${bgColor}`}>
        {!data.length ? (
          <NoData />
        ) : (
          <>
            <CurrentWeather data={data[0]} />
            <WeatherDetails data={data.slice(1, 8)} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
