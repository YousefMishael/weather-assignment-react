import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import WeatherDetails from "./Components/WeatherDetails/WeatherDetails";
import Data from "./Data/data.json";
import { fetData } from "./Utils/Utils";

const API_KEY = "af441932e2d1e7834d21f0babed7e23b";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // setData(Data.list?.slice(0, 8));
    search("Ramallah");
  }, []);

  function search(city) {
    const resp = fetData(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${API_KEY}`
    );

    resp.then((res) => {
      if (res.cod === "200") {
        setData(res.list);
      } else {
        setData([]);
      }
    });
  }

  return (
    <div className="app">
      <header className="app__header">
        <Header search={search} />
      </header>

      <main className="app__main">
        <CurrentWeather data={data[0]} />
        <WeatherDetails data={data.slice(1, 8)} />
      </main>
    </div>
  );
}

export default App;
