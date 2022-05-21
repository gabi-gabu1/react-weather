import axios from "axios";
import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./App.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function showForecast(response) {
    console.log(response);
    setReady(true);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      coords: response.data.coord,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const apiKey = "a592e749eb4eda83dffcd2b9176f3c7f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="container">
        <div className="container-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Type a city.."
                  className="form-control"
                  onChange={changeCity}
                />
              </div>
              <div className="col-4">
                <input type="submit" className="btn btn-primary" />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast
            icon={weatherData.iconUrl}
            coords={weatherData.coords}
          />
        </div>

        <p className="open-source">
          <a
            href="https://github.com/gabi-gabu1/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Gabriela Dontamsetti
        </p>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
