import axios from "axios";

export default function Weather(props) {
  function getTemperature(response) {
    return alert(
      `It is ${Math.round(response.data.main.temp)}°C in ${props.city}`
    );
  }
  let apiKey = "a592e749eb4eda83dffcd2b9176f3c7f";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(url).then(getTemperature);
}
