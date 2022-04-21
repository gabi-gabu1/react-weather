export default function Weather() {
  let weatherData = {
    day: "Friday",
    humidity: 80,
    wind: 5,
    temperature: 20,
    city: "Zagreb",
    description: "Clear sky",
  };
  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="row search">
          <div className="col-9">
            <form />
            <input
              className="form-control mb-4 city-input"
              type="text"
              placeholder="Enter a city"
              autocomplete="off"
              autofocus
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="search-button btn btn-primary w-100"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-5 prague">
            <h1 className="city-prague">{weatherData.city}</h1>

            <ul>
              <li className="date">{weatherData.day} 16:22</li>

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
                src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png"
                width="80px"
                alt="icon"
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

        <div className="forecast-days"></div>
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
}
