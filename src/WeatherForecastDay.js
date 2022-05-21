import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function forecastIcon() {
    let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return `${icon}`;
  }

  return (
    <div>
      <p>{day()}</p>
      <img src={forecastIcon()} width="50px" alt="icon" className="icon" />
      <div className="weat">
        <span className="forecast-temp-max">{maxTemperature()}°</span>{" "}
        <span className="forecast-temp-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
