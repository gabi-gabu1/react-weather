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
    </div>
  );
}
