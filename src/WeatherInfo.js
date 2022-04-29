import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col-5 prague">
          <h1 className="city-prague">{props.data.city}</h1>

          <ul>
            <li className="date">
              <FormattedDate date={props.data.date} />
            </li>

            <li>
              <span>{props.data.description}</span>
            </li>
          </ul>
          <ul>
            <li>
              Humidity: <span> {props.data.humidity} </span>%
            </li>
            <li>
              Wind: <span>{props.data.wind}</span>km/hr
            </li>
          </ul>
        </div>

        <div className="col-3 weather-icon">
          <li>
            <img
              src={props.data.iconUrl}
              width="100px"
              alt={props.data.description}
              className="icon"
            />
          </li>
        </div>
        <div className="col-4 temperature-container">
          <WeatherTemperature celsius={props.data.temperature} />
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
  );
}
