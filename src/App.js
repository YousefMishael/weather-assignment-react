import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import WeatherDetails from "./Components/WeatherDetails/WeatherDetails";
import Data from "./Data/data.json";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data.list?.slice(0, 8));
  }, []);

  function search(city) {}

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
