import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [temperature, setTemperature] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleForecast(response) {
    console.log(response);
    setLoaded(true);
    setTemperature(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="forecast-days mt-4">
        <div className="row">
          {temperature.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "a592e749eb4eda83dffcd2b9176f3c7f";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=40&appid=${apiKey}&units=metric`;
    console.log(apiUrl);

    axios.get(apiUrl).then(handleForecast);

    return null;
  }
}
