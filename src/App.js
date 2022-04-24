import axios from "axios";
import React, { useState } from "react";
import "./App.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function showForecast(response) {
    console.log(response);
    setReady(true);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      city: response.data.name,
      iconUrl:
        "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png",
    });
  }

  if (ready) {
    return (
      <div className="container">
        <div className="container-wrapper">
          <div className="row search">
            <div className="col-6">
              <form />
              <input
                className="form-control mb-4 city-input"
                type="text"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="search-button btn btn-primary w-100"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Current"
                className="search-button btn btn-success w-100"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-5 prague">
              <h1 className="city-prague">{weatherData.city}</h1>

              <ul>
                <li className="date">Friday 16:22</li>

                <li>
                  <span>{weatherData.description}</span>
                </li>
              </ul>
              <ul>
                <li>
                  Humidity: <span> {weatherData.humidity} </span>%
                </li>
                <li>
                  Wind: <span>{weatherData.wind}</span>km/hr
                </li>
              </ul>
            </div>

            <div className="col-3 weather-icon">
              <li>
                <img
                  src={weatherData.iconUrl}
                  width="80px"
                  alt={weatherData.description}
                  className="icon"
                />
              </li>
            </div>
            <div className="col-4 temperature-container">
              <span className="temperature-prague">
                {weatherData.temperature}
              </span>
              <span className="units">°C</span>
            </div>
          </div>

          <div className="forecast-days mt-4">
            <div className="row">
              <div className="col">
                <p>Fri</p>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png"
                  width="50px"
                  alt="icon"
                  className="icon"
                />
              </div>
              <div className="col">
                <p>Sat</p>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png"
                  width="50px"
                  alt="icon"
                  className="icon"
                />
              </div>
              <div className="col">
                <p>Sun</p>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png"
                  width="50px"
                  alt="icon"
                  className="icon"
                />
              </div>
              <div className="col">
                <p>Mon</p>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png"
                  width="50px"
                  alt="icon"
                  className="icon"
                />
              </div>
              <div className="col">
                <p>Tue</p>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png"
                  width="50px"
                  alt="icon"
                  className="icon"
                />
              </div>
            </div>
          </div>
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
    let city = "Miami";
    const apiKey = "a592e749eb4eda83dffcd2b9176f3c7f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
    return "Loading..";
  }
}
