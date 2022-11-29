import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import WeatherDetails from "./Components/WeatherDetails/WeatherDetails";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <Header />
      </header>

      <main className="app__main">
        <CurrentWeather />
        <WeatherDetails />
      </main>
    </div>
  );
}

export default App;
